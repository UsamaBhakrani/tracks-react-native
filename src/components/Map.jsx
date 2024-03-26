import { useContext } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  // Mock Locations
  // let points = [];

  // for (let i = 0; i < 20; i++) {
  //   points.push({
  //     latitude: 24.86146 + i * 0.001,
  //     longitude: 67.00994 + i * 0.001,
  //   });
  // }

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* <Polyline coordinates={points} `/> */}
        <Circle
          center={currentLocation.coords}
          radius={150}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(25, 203, 16, 0.3)"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  map: {
    height: 500,
  },
});

export default Map;
