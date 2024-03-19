import { StyleSheet } from "react-native";
import { Text, Input, Button } from "@rneui/themed";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation: { navigate } }) => {
  return (
    <>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Signup" />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SignupScreen;
