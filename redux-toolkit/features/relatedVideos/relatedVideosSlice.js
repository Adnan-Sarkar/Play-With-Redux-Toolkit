const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// initial state
const initialState = {
  loading: false,
  relatedVideos: [],
  error: "",
};

// create thunk function for fetching related tags videos
const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideo",
  async (tags) => {
    const filteredString = tags?.map((tag) => `tags_like=${tag}`).join("&");
    const url = `http://localhost:9000/videos?`.concat(filteredString);

    const request = await fetch(url);
    const relatedVideos = await request.json();
    return relatedVideos;
  }
);

// create slice
const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedVideos.pending, (state, action) => {
      state.loading = true;
      state.relatedVideos = [];
      state.error = "";
    });

    builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.relatedVideos = action.payload?.sort((a, b) => {
        return Number(b.views?.slice(0, -1)) - Number(a.views?.slice(0, -1));
      });
      state.error = "";
    });

    builder.addCase(fetchRelatedVideos.rejected, (state, action) => {
      state.loading = false;
      state.relatedVideos = [];
      state.error = action.error;
    });
  },
});

// export reducer and thunk function
module.exports = relatedVideosSlice.reducer;
module.exports.fetchRelatedVideos = fetchRelatedVideos;
