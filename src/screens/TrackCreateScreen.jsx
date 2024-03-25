import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";
import Map from "../components/Map";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { requestForegroundPermissionsAsync } from "expo-location";
import { useEffect, useState } from "react";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const insets = useSafeAreaInsets();

  const startWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
    } catch (error) {
      setErr(error);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

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
