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
  const { state:{isRecording,locations}, addLocation } = useContext(LocationContext);
  const tracking = useIsFocused();
  const callback = useCallback(
    (location) => {
      addLocation(location, isRecording);
    },
    [isRecording]
  );
  const [err] = useLocation(tracking || isRecording, callback);
  const insets = useSafeAreaInsets();

  console.log(locations.length);

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
