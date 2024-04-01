import trackReducer from "../reducers/trackReducer";
import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

const fetchTracks = (dispatch) => {
  return () => {};
};
const createTrack = (dispatch) => {
  return async (name, locations) => {
    await tracker.post("/tracks", { name, locations });
  };
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
