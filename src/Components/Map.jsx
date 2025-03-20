import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import PropTypes from "prop-types";

const { width, height } = Dimensions.get("window");

const Map = ({ title, latitude, longitude }) => {
  return (
    <View style={styles.container}>
      {/* Title Container */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Map Container */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          showsUserLocation
          showsMyLocationButton
        >
          {/* Map Marker */}
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            title={title}
          />
        </MapView>
      </View>
    </View>
  );
};

export default Map;

Map.propTypes = {
  title: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    width: width * 0.95,
  },
  titleContainer: {
    backgroundColor: "#fff",
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  mapContainer: {
    width: width * 0.95,
    height: height * 0.2,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
