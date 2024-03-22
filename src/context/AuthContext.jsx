import authReducer from "../reducers/authReducer";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {
  CLEARERRORMESSAGE,
  ISAUTHENTICATEDERROR,
  SIGNIN,
  SIGNUP,
} from "../actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const signUp = (dispatch) => {
  const { navigate } = useNavigation();
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: SIGNUP, payload: response.data.token });
      navigate("MainFlow");
    } catch (error) {
      dispatch({
        type: ISAUTHENTICATEDERROR,
        payload: "Something Went Wrong with Sign Up",
      });
    }
  };
};

const signIn = (dispatch) => {
  const { navigate } = useNavigation();
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: SIGNIN, payload: response.data.token });
      navigate("MainFlow");
    } catch (error) {
      dispatch({
        type: ISAUTHENTICATEDERROR,
        payload: "Something Went Wrong with Sign In",
      });
    }
  };
};

const signOut = (dispatch) => {
  return () => {};
};

const clearError = (dispatch) => {
  return () => {
    dispatch({ type: CLEARERRORMESSAGE });
  };
};

const tryLocalSignIn = (dispatch) => {
  const { navigate } = useNavigation();
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: SIGNIN, payload: token });
      navigate("MainFlow");
    } else {
      navigate("Signup");
    }
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp, clearError, tryLocalSignIn },
  { token: null, errorMessage: "" }
);
