import trackReducer from "../reducers/trackReducer";
import createDataContext from "./createDataContext";

const fetchTracks = (dispatch) => {
  return () => {};
};
const createTrack = (dispatch) => {
  return (name, locations) => {
    console.log(name, locations)
  };
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
