import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "@rneui/themed";
import { useState } from "react";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>{headerText}</Text>
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
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <Spacer>
        <Button
          title={submitText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    marginLeft: 40,
    fontSize: 18,
    color: "red",
  },
});

export default AuthForm;
