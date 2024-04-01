import createDataContext from "./createDataContext";
import locationReducer from "../reducers/locationReducer";
import {
  ADDCURRENTLOCATION,
  ADDLOCATION,
  ADDTRACKNAME,
  STARTRECORDING,
  STOPRECORDING,
  RESET,
} from "../actions";

const startRecording = (dispatch) => {
  return () => {
    dispatch({ type: STARTRECORDING });
  };
};

const stopRecording = (dispatch) => {
  return () => {
    dispatch({ type: STOPRECORDING });
  };
};

const addLocation = (dispatch) => {
  return (location, recording) => {
    dispatch({ type: ADDCURRENTLOCATION, payload: location });
    if (recording) {
      dispatch({ type: ADDLOCATION, payload: location });
    }
  };
};

const changeName = (dispatch) => {
  return (name) => {
    dispatch({ type: ADDTRACKNAME, payload: name });
  };
};

const reset = (dispatch) => {
  return () => {
    dispatch({ type: RESET });
  };
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName, reset },
  { isRecording: false, locations: [], currentLocation: null, name: "" }
);
