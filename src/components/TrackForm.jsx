import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TrackForm = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text>I am a TrackForm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrackForm;
