import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ route }) => {
  const { state } = useContext(TrackContext);
  const insets = useSafeAreaInsets();

  const track = state.find((t) => t._id === route.params._id);
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text>{track.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrackDetailScreen;
