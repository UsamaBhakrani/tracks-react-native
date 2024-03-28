import "../_mockLocations";
import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";
import Map from "../components/Map";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext, useCallback } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { useIsFocused } from "@react-navigation/native";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";

const TrackCreateScreen = () => {
  const { state, addLocation } = useContext(LocationContext);
  const tracking = useIsFocused();
  const callback = useCallback(
    (location) => {
      addLocation(location, state.isRecording);
    },
    [state.isRecording]
  );
  const [err] = useLocation(tracking, callback);
  const insets = useSafeAreaInsets();

  console.log(state.locations.length);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err && (
        <Text style={{ color: "red" }}>please enable location services</Text>
      )}
      <Spacer>
        <TrackForm />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrackCreateScreen;
