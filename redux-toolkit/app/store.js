const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const singleVidoeReducer = require("../features/singleVideo/singleVideoSlice");
const relatedVideosReducer = require("../features/relatedVideos/relatedVideosSlice");

const logger = createLogger();

// create store
const store = configureStore({
  reducer: {
    singleVideo: singleVidoeReducer,
    relatedVideos: relatedVideosReducer,
  },

  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

// export store
module.exports = store;
