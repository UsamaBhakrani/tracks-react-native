import { Button } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AccountScreen = () => {
  const insets = useSafeAreaInsets();
  const { signOut } = useContext(AuthContext);
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
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
