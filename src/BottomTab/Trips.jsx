import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import TripCard from "../Components/TripCard";
import images from "../Assets/images";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const sampleTrips = [
  {
    id: 1,
    title: "Hill Climb",
    destination: "Matara to Kandy",
    image: images.kandy,
    duration: "6h 3min",
    distance: "230km",
    food: 2,
    fuel: 1,
    nightStay: 1,
    hashTags: ["#hillclimb", "#matara", "#kandy"],
  },
  {
    id: 2,
    title: "Beach Ride",
    destination: "Colombo to Hikkaduwa",
    image: images.hikkaduwa,
    duration: "2h 30min",
    distance: "120km",
    food: 1,
    fuel: 1,
    nightStay: 0,
    hashTags: ["#beach", "#colombo", "#sea"],
  },
  {
    id: 3,
    title: "Mountain Trek",
    destination: "Kandy to Nuwara Eliya",
    image: images.nuwaraEliya,
    duration: "4h 30min",
    distance: "180km",
    food: 2,
    fuel: 1,
    nightStay: 1,
    hashTags: ["#mountain", "#kandy", "#hike"],
  },
];

const Trips = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addNewTrip}
        onPress={() => navigation.navigate("CreateNewTrip")}
      >
        <Text style={styles.newTripText}>New Trip</Text>
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.exploreTrips}>
          <Text style={styles.title}>Explore Trips</Text>
          <FlatList
            data={sampleTrips}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TripCard {...item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.myTrips}>
          <Text style={styles.title}>My Trips</Text>
          <FlatList
            data={sampleTrips}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TripCard {...item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.favoriteTrips}>
          <Text style={styles.title}>Favorite Trips</Text>
          <FlatList
            data={sampleTrips}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TripCard {...item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 70,
  },
  exploreTrips: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 60,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
  },
  myTrips: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 60,
    width: "100%",
  },
  favoriteTrips: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 60,
    width: "100%",
  },
  addNewTrip: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    paddingHorizontal: 15,
    bottom: 90,
    right: 20,
    backgroundColor: "#343434",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  newTripText: {
    color: "white",
    fontSize: 14,
  },
});
