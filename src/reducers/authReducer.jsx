import {
  SIGNIN,
  ISAUTHENTICATED,
  ISAUTHENTICATEDERROR,
  SIGNOUT,
  SIGNUP,
} from "../actions";

const authReducer = (state, action) => {
  if (action.type === ISAUTHENTICATEDERROR) {
    return {
      ...state,
      errorMessage: action.payload,
    };
  }
  if (action.type === SIGNUP) {
    return {
      ...state,
      token: action.payload,
      errorMessage: "",
    };
  }
  if (action.type === SIGNIN) {
    return {
      ...state,
      token: action.payload,
      errorMessage: "",
    };
  }
  return state;
};

export default authReducer;
