import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import images from "../Assets/images";
import PropTypes from "prop-types";

const { width } = Dimensions.get("window");
const TripCard = ({
  title,
  destination,
  image,
  duration,
  distance,
  food,
  fuel,
  nightStay,
  hashTags = [],
}) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.overlay} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.destination}>{destination}</Text>
          <View style={styles.subTitleContainer}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <MaterialCommunityIcons
                name="car-clock"
                size={18}
                color="#fff"
                opacity={0.7}
              />
              <Text style={styles.subTitle}>{duration}</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <MaterialCommunityIcons
                name="map-marker-distance"
                size={18}
                color="#fff"
                opacity={0.7}
              />
              <Text style={styles.subTitle}>{distance}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.tripDetails}>
          <Text>
            🍔 <Text style={styles.highlight}>{food}</Text> Food{"   |   "}⛽{" "}
            <Text style={styles.highlight}>{fuel}</Text> Fuel{"   |   "}
            🏨 <Text style={styles.highlight}>{nightStay}</Text> Night Stay
          </Text>
        </View>

        <View style={styles.tags}>
          {hashTags.map((tag, index) => (
            <Text key={index} style={styles.hashTags}>
              {tag}
            </Text>
          ))}
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => setFavorite(!favorite)}>
            {!favorite ? (
              <FontAwesome name="bookmark-o" size={24} color="black" />
            ) : (
              <FontAwesome name="bookmark" size={24} color="black" />
            )}
          </TouchableOpacity>
          <View style={styles.profile}>
            {images.profile1 && (
              <Image source={images.profile1} style={styles.profileImage} />
            )}
            <Text style={styles.profileName}>John Doe</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

TripCard.propTypes = {
  title: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      uri: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  duration: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  food: PropTypes.number.isRequired,
  fuel: PropTypes.number.isRequired,
  nightStay: PropTypes.number.isRequired,
  hashTags: PropTypes.arrayOf(PropTypes.string),
};

export default TripCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.85,
    height: 200,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    margin: 10,
    position: "relative",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 80,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
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
    fontWeight: "600",
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
    color: "black",
    fontWeight: "bold",
  },
  tags: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
  },
  hashTags: {
    backgroundColor: "lightgray",
    color: "#fff",
    padding: 5,
    borderRadius: 20,
    fontSize: 12,
  },
  bottomContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    height: 30,
    width: 100,
    paddingLeft: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  profileName: {
    fontSize: 14,
    marginRight: 5,
  },
});
