import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Spacer from "../components/Spacer";

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
      <TouchableOpacity onPress={() => navigate("Signup")}>
        <Spacer>
          <Text style={styles.link}>
            Dont Have an Account? Sign Up Instead
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

export default SigninScreen;
