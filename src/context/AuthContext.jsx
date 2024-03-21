import authReducer from "../reducers/authReducer";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { ISAUTHENTICATEDERROR, SIGNUP } from "../actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const signUp = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: SIGNUP, payload: response.data.token });
    } catch (error) {
      dispatch({
        type: ISAUTHENTICATEDERROR,
        payload: "Something Went Wrong with Sign Up",
      });
    }
  };
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
  { token: null, errorMessage: "" }
);
