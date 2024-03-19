import { StyleSheet, Text, Button } from "react-native";

const TrackListScreen = ({ navigation: { navigate } }) => {
  return (
    <>
      <Text>TrackListScreen</Text>
      <Button title="goto track detail" onPress={() => navigate("TrackDetail")} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrackListScreen;
