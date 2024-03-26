import { ADDCURRENTLOCATION } from "../actions";

const locationReducer = (state, action) => {
  if (action.type === ADDCURRENTLOCATION) {
    return {
      ...state,
      currentLocation: action.payload,
    };
  }
  return state;
};

export default locationReducer;
