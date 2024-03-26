import { useEffect, useState } from "react";
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (callback) => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 100000,
          distanceInterval: 10,
        },
        callback
      );
    } catch (error) {
      setErr(error);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [err];
};
