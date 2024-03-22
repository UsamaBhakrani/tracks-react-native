import { Button } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <View>
      <Spacer>
        <Button title="Logout" onPress={signOut} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AccountScreen;
