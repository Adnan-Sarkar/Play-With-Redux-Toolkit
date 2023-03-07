const store = require("./app/store");
const { fetchSingleVidoe } = require("./features/singleVideo/singleVideoSlice");
const {
  fetchRelatedVideos,
} = require("./features/relatedVideos/relatedVideosSlice");

// dispatch actions
store
  .dispatch(fetchSingleVidoe())
  .unwrap()
  .then((videoObject) => {
    store.dispatch(fetchRelatedVideos(videoObject.tags));
  })
  .catch((err) => {
    console.log(err);
  });
