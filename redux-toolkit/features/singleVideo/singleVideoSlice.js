const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// initial state for fetching single vidoe
const initialState = {
  loading: false,
  singleVidoe: null,
  error: "",
};

// create thunk function for fetching single vidoe
const fetchSingleVidoe = createAsyncThunk(
  "singleVideo/fetchVideo",
  async () => {
    const url = `http://localhost:9000/videos`;
    const response = await fetch(url);
    const singleVidoe = await response.json();
    return singleVidoe;
  }
);

// create slice
const singleVidoeSlice = createSlice({
  name: "singleVideo",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSingleVidoe.pending, (state, action) => {
      state.loading = true;
      state.singleVidoe = null;
      state.error = "";
    });

    builder.addCase(fetchSingleVidoe.fulfilled, (state, action) => {
      state.loading = false;
      state.singleVidoe = action.payload;
      state.error = "";
    });

    builder.addCase(fetchSingleVidoe.rejected, (state, action) => {
      state.loading = false;
      state.singleVidoe = null;
      state.error = action.error;
    });
  },
});

// exports reducer & thunk function
module.exports = singleVidoeSlice.reducer;
module.exports.fetchSingleVidoe = fetchSingleVidoe;
