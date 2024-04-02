import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ route: { params } }) => {
  const { state } = useContext(TrackContext);
  const insets = useSafeAreaInsets();

  const track = state.find((t) => t._id === params._id);
  const initialCoords = track.locations[0].coords

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <MapView
        style={{ height: 300 }}
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrackDetailScreen;
