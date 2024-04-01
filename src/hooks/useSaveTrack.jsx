import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const { navigate } = useNavigation();
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);

  const saveTrack = () => {
    createTrack(name, locations);
    reset();
    navigate("TrackList");
  };

  return [saveTrack];
};
