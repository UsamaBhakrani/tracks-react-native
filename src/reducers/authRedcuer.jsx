import createDataContext from "../context/createDataContext";

const AuthReducer = (state, action) => {};

export const { Provider, Context } = createDataContext(
  AuthReducer,
  {},
  { isSignedIn: false }
);
