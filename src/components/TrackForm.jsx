import { Button, Input, Text } from "@rneui/themed";
import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { isRecording, locations, currentLocation, name },
    startRecording,
    stopRecording,
    addLocation,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Input placeholder="Enter Name" onChangeText={changeName} value={name} />
      <Spacer>
        {isRecording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!isRecording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
