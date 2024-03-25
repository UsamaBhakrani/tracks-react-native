import * as Location from "expo-location";

const tenMetresinDegress = 0.0001;

const getLocation = (increment) => {
  return {
    timeStamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitude: 5,
      latitude: 24.86146 + increment * tenMetresinDegress,
      longitude: 67.00994 + increment * tenMetresinDegress,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 100000);
