import { StyleSheet, Text, Button, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TrackListScreen = ({ navigation: { navigate } }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text>TrackListScreen</Text>
      <Button
        title="goto track detail"
        onPress={() => navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrackListScreen;
