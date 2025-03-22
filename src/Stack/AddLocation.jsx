import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const AddLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  // useState for location details
  const [locationName, setLocationName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        setLoading(false);
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Add TextInput for location name */}
          <Text style={styles.label}>Location name</Text>
          <TextInput
            style={styles.input}
            placeholder="Location name"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
          />

          {/* Add TextInput for address */}
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          {/* Add TextInput for description */}
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            numberOfLines={4}
          />

          {/* Add map view */}

          <Text style={styles.label}>Location</Text>
          <View style={styles.mapContainer}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : errorMsg ? (
              <Text>{errorMsg}</Text>
            ) : (
              <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                followsUserLocation
                region={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                  }}
                  title="You are here"
                />
              </MapView>
            )}
            <TouchableOpacity
              style={styles.editLocation}
              onPress={() => alert("Edit location")}
            >
              <MaterialIcons name="edit-location-alt" size={24} color="black" />
              <Text style={styles.editLocationText}>Edit map location</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Images</Text>
          <View style={styles.imageContainer}>
            <TouchableOpacity
              style={styles.imageBox}
              onPress={() => alert("Add image")}
            >
              <MaterialCommunityIcons
                name="file-image-plus-outline"
                size={50}
                color="#888"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default AddLocation;

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 70,
  },
  container: {
    flex: 1,
    width: width,
    alignSelf: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  mapContainer: {
    width: width * 0.95,
    height: height * 0.25,
    borderRadius: 15,
    marginBottom: 20,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15,
  },
  input: {
    width: "100%",
    height: 45,
    marginVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  editLocation: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#cbebf4",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  editLocationText: {
    fontSize: 14,
    color: "#000",
    marginLeft: 5,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageBox: {
    width: width * 0.25,
    height: width * 0.25,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
  },
});
