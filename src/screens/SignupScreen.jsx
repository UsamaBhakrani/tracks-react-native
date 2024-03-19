import { StyleSheet, Text, View, Button } from "react-native";

const SignupScreen = ({ navigation: { navigate } }) => {
  return (
    <>
      <Text>SignupScreen</Text>
      <Button title="Go to Signin" onPress={() => navigate("Signin")} />
      <Button title="Go to Main Flow" onPress={() => navigate("MainFlow")} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SignupScreen;
