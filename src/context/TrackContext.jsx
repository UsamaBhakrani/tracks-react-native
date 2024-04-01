import trackReducer from "../reducers/trackReducer";
import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
import { GETTRACKS } from "../actions";

const fetchTracks = (dispatch) => {
  return async () => {
    const response = await tracker.get("/tracks");
    dispatch({ type: GETTRACKS, payload: response.data });
  };
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
