import {
  ADDCURRENTLOCATION,
  ADDLOCATION,
  STARTRECORDING,
  STOPRECORDING,
  ADDTRACKNAME,
  RESET,
} from "../actions";

const locationReducer = (state, action) => {
  if (action.type === ADDLOCATION) {
    return { ...state, locations: [...state.locations, action.payload] };
  }
  if (action.type === ADDCURRENTLOCATION) {
    return {
      ...state,
      currentLocation: action.payload,
    };
  }
  if (action.type === STARTRECORDING) {
    return { ...state, isRecording: true };
  }
  if (action.type === STOPRECORDING) {
    return { ...state, isRecording: false };
  }
  if (action.type === ADDTRACKNAME) {
    return { ...state, name: action.payload };
  }
  if (action.type === RESET) {
    return { ...state, name: "", locations: [] };
  }
  return state;
};

export default locationReducer;
