import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import PropTypes from "prop-types";

const { width } = Dimensions.get("window");
const postWidth = width * 0.95;
const Post = ({ icon, image, name, caption, likes, comments }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={icon} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.caption}>{caption}</Text>
        </View>
      </View>
      <Image source={image} style={styles.image} />
      <View style={styles.lokeCommentContainer}>
        <View style={styles.likes}>
          <Feather name="map-pin" size={24} color="black" />
          <Text>{likes}</Text>
        </View>
        <View style={styles.comments}>
          <FontAwesome5 name="comment-alt" size={22} color="black" />
          <Text>{comments}</Text>
        </View>
      </View>
    </View>
  );
};

Post.propTypes = {
  // For static image imports (which are numbers in React Native)
  icon: PropTypes.oneOfType([
    PropTypes.number, // Static resources (require/import)
    PropTypes.shape({
      // URI objects
      uri: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  image: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      uri: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  name: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: postWidth,
    marginBottom: 20,
  },
  image: {
    width: postWidth,
    height: 200,
    borderRadius: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  caption: {
    fontSize: 15,
    marginTop: 5,
    textAlign: "left",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: postWidth,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 20,
    width: postWidth * 0.85,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  lokeCommentContainer: {
    flexDirection: "row",
    width: postWidth,
    justifyContent: "space-around",
    marginTop: 10,
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  comments: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
