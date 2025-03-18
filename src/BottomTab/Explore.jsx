import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Map from "../Components/Map";
import { TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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

const Explore = (navigate) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addLocation}
        onPress={() => navigation.navigate("AddLocation")}
      >
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search location"
          placeholderTextColor="#343434"
        />
        <TouchableOpacity onPress={() => alert("Search")}>
          <View style={styles.searchIcon}>
            <Feather name="search" size={24} color="#343434" />
          </View>
        </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.8,
    height: 50,
    backgroundColor: "#cbebf4",
    opacity: 0.9,
    borderRadius: 50,
    marginTop: 40,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "white",
  },
  searchIcon: {
    margin: 10,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 70,
    width: width,
  },
  addLocation: {
    position: "absolute",
    bottom: 90,
    right: 20,
    backgroundColor: "#343434",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
});
