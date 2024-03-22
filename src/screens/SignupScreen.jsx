import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation: { navigate } }) => {
  const { state, signUp, clearError } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up For Tracker"
        errorMessage={state.errorMessage}
        submitText="Sign Up"
        onSubmit={signUp}
      />
      <NavLink
        title="Already Have an Account? Sign In Instead"
        link={() => {
          navigate("Signin");
          clearError();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
  link: {
    color: "dodgerblue",
    fontSize: 19,
  },
});

export default SignupScreen;
