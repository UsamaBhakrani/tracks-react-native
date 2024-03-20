import authReducer from "../reducers/authReducer";
import createDataContext from "./createDataContext";

const signUp = (dispatch) => {
  return ({ email, password }) => {};
};

const signIn = (dispatch) => {
  return ({ email, password }) => {};
};

const signOut = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp },
  { isSignedIn: false }
);
