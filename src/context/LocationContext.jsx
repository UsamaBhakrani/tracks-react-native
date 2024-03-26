import createDataContext from "./createDataContext";
import locationReducer from "../reducers/locationReducer";

const startRecording = (dispatch) => {
  return () => {};
};

const stopRecording = (dispatch) => {
  return () => {};
};

const addLocation = (dispatch) => {
  return (location) => {
    dispatch({ type: ADDCURRENTLOCATION, payload: location });
  };
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { isRecording: false, locations: [], currentLocation: null }
);
