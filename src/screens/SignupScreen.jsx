import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "@rneui/themed";
import Spacer from "../components/Spacer";
import { useContext, useState } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation: { navigate } }) => {
  const { state, signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(state.errorMessage);

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage && (
        <Text style={styles.error}>{state.errorMessage}</Text>
      )}
      <Spacer>
        <Button title="Signup" onPress={() => signUp({ email, password })} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
  error: {
    marginLeft: 40,
    fontSize: 18,
    color: "red",
  },
});

export default SignupScreen;
