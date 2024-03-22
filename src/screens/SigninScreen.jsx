import { StyleSheet, View } from "react-native";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation: { navigate } }) => {
  const { state, signIn } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In For Tracker"
        errorMessage={state.errorMessage}
        submitText="Sign In"
        onSubmit={signIn}
      />
      <NavLink
        title="Dont Have an Account? Sign Up Instead"
        link={() => navigate("Signup")}
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
});

export default SigninScreen;
