import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";
import Map from "../components/Map";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TrackCreateScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text h2>Create a Track</Text>
      <Map />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrackCreateScreen;
