import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "@rneui/themed";
import Spacer from "../components/Spacer";
import { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation: { navigate } }) => {
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up For Tracker"
        errorMessage={state.errorMessage}
        submitText="Sign Up"
        onSubmit={({ email, password }) => signUp({ email, password })}
      />
      <TouchableOpacity onPress={() => navigate("Signin")}>
        <Spacer>
          <Text style={styles.link}>
            Already Have an Account? Sign In Instead
          </Text>
        </Spacer>
      </TouchableOpacity>
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
