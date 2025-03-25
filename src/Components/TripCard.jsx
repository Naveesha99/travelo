import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import images from "../Assets/images";

const TripCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTitle}>
        <Image source={images.post1} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hill Climb</Text>
          <Text style={styles.destination}>Matara to Ella Rock</Text>
          <View style={styles.subTitleContainer}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <MaterialCommunityIcons
                name="car-clock"
                size={18}
                color="#fff"
                opacity={0.7}
              />
              <Text style={styles.subTitle}>6h 3min</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <MaterialCommunityIcons
                name="map-marker-distance"
                size={18}
                color="#fff"
                opacity={0.7}
              />
              <Text style={styles.subTitle}>230km</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.tripDetails}>
          <Text>
            🍔 <Text style={styles.highlight}>2</Text> Food{" "}
          </Text>
          <Text>|</Text>
          <Text>
            ⛽ <Text style={styles.highlight}>1</Text> Fuel{" "}
          </Text>
          <Text>|</Text>
          <Text>
            🏨 <Text style={styles.highlight}>1</Text> Night Stay
          </Text>
        </View>
        <View style={styles.specialNote}>
          <Text style={styles.note}>
            <Text style={{ fontWeight: "bold" }}>Special Note: </Text>This is a
            long trip. Make sure you have enough fuel
          </Text>
        </View>
        <View style={styles.tags}>
          <Text style={styles.hashTags}>#hillclimb</Text>
          <Text style={styles.hashTags}>#matara</Text>
          <Text style={styles.hashTags}>#ellarock</Text>
        </View>
        <View style={styles.profile}>
          <Image source={images.profile1} style={{ width: 25, height: 25 }} />
          <Text>John Doe</Text>
        </View>
      </View>
    </View>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    height: 200,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    margin: 10,
    position: "relative",
  },
  cardTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 8,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleContainer: {
    position: "absolute",
    top: 3,
    left: 3,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  destination: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "semi-bold",
  },
  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.7,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  tripDetails: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  highlight: {
    color: "#07dfd4",
    fontWeight: "bold",
  },
  specialNote: {
    marginTop: 10,
  },
  note: {
    fontSize: 14,
  },
  tags: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
    flexWrap: "wrap", // This allows the tags to wrap into the next line if needed
  },
  hashTags: {
    backgroundColor: "lightgray",
    color: "#fff",
    padding: 5,
    borderRadius: 20,
    fontSize: 12,
  },
  profile: {
    position: "absolute",
    bottom: 5,
    right: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    height: 30,
    width: 100,
    paddingLeft: 10,
  },
});
