import { View, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const { width, height } = Dimensions.get("window");

const EditMapLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 6.0535,
    longitude: 80.2209,
  });

  // Function to handle marker drag or map press
  const handleLocationChange = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={handleLocationChange} // Handles tap on the map
        >
          <Marker
            coordinate={selectedLocation}
            title={`Latitude: ${selectedLocation.latitude}, Longitude: ${selectedLocation.longitude}`}
            draggable
            onDragEnd={handleLocationChange}
          />
        </MapView>
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
