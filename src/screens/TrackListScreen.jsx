import { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "@rneui/themed";
import { useIsFocused } from "@react-navigation/native";

const TrackListScreen = ({ navigation: { navigate } }) => {
  const focused = useIsFocused();
  const insets = useSafeAreaInsets();
  const { fetchTracks, state } = useContext(TrackContext);

  if (focused) {
    fetchTracks();
  }

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Chevron />
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrackListScreen;
