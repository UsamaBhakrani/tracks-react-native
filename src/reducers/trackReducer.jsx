import { GETTRACKS } from "../actions";

const trackReducer = (state, action) => {
  if (action.type === GETTRACKS) {
    return action.payload;
  }
  return state;
};

export default trackReducer;
