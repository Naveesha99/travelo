import {
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

const { width, height } = Dimensions.get("window");

const EditMapLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  // Set current location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        setLoading(false);
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setSelectedLocation(currentLocation.coords);
      setLoading(false);
    })();
  }, []);

  // Function to handle marker drag or map press
  const handleLocationChange = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : errorMsg ? (
          <Text>{errorMsg}</Text>
        ) : selectedLocation ? (
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={handleLocationChange}
          >
            <Marker
              coordinate={selectedLocation}
              title={`Latitude: ${selectedLocation.latitude.toFixed(
                4
              )}, Longitude: ${selectedLocation.longitude.toFixed(4)}`}
              draggable
              onDragEnd={handleLocationChange}
            />
          </MapView>
        ) : (
          <Text>Fetching location...</Text>
        )}
      </View>
    </View>
  );
};

export default EditMapLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: width,
  },
  mapContainer: {
    height: height,
    width: width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
