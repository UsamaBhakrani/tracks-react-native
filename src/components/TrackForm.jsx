import { Button, Input, Text } from "@rneui/themed";
import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { isRecording, locations, currentLocation, name },
    startRecording,
    stopRecording,
    addLocation,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Input placeholder="Enter Name" onChangeText={changeName} value={name} />
      {isRecording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
    </>
  );
};

export default TrackForm;
