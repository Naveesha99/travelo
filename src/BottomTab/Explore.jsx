import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React from "react";
import Map from "../Components/Map";
import { TextInput } from "react-native";

const { width } = Dimensions.get("window");

const locations = [
  {
    id: 1,
    name: "Matara",
    latitude: 5.9485,
    longitude: 80.5353,
    title: "Matara",
  },
  {
    id: 2,
    name: "Weligama",
    latitude: 5.9724,
    longitude: 80.4298,
    title: "Weligama",
  },
  {
    id: 3,
    name: "Galle",
    latitude: 6.0535,
    longitude: 80.2209,
    title: "Galle",
  },
  {
    id: 4,
    name: "Unawatuna",
    latitude: 6.0032,
    longitude: 80.2484,
    title: "Unawatuna",
  },
];

const Explore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search location"
          placeholderTextColor="#888"
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {locations.map((location) => (
          <Map
            key={location.id}
            title={location.title}
            latitude={location.latitude}
            longitude={location.longitude}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: width,
  },
  searchBar: {
    width: width * 0.8,
    height: 50,
    backgroundColor: "#f1f1f1",
    borderRadius: 50,
    marginTop: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 70,
    width: width,
  },
});
