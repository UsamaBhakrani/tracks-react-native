import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TrackDetailScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text>TrackDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrackDetailScreen;
