import "../_mockLocations";
import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";
import Map from "../components/Map";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ navigation: { isFocused } }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);
  const insets = useSafeAreaInsets();

  // console.log(isFocused())
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err && (
        <Text style={{ color: "red" }}>please enable location services</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrackCreateScreen;
