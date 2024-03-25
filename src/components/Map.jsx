import { View, StyleSheet, Text } from "react-native";
import MapView, { Polyline } from "react-native-maps";
const Map = () => {
  let points = [];

  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 24.86146 + i * 0.001,
      longitude: 67.00994 + i * 0.001,
    });
  }

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 24.86146,
          longitude: 67.00994,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Polyline coordinates={points} />
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
