import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React from "react";
import Post from "./Post";

// Get the screen width to help with sizing
const { width } = Dimensions.get("window");

const posts = [
  {
    id: 1,
    icon: require("../Assets/images/profile1.png"),
    image: require("../Assets/images/post1.jpg"),
    name: "John Doe",
    caption: "Beautiful sunset",
    likes: 10,
    comments: 2,
  },
  {
    id: 2,
    icon: require("../Assets/images/profile2.png"),
    image: require("../Assets/images/post2.jpg"),
    name: "Jane Doe",
    caption: "Beautiful sunrise",
    likes: 20,
    comments: 5,
  },
  {
    id: 3,
    icon: require("../Assets/images/profile3.png"),
    image: require("../Assets/images/post3.jpg"),
    name: "John Smith",
    caption: "Beautiful moon",
    likes: 15,
    comments: 3,
  },
];

const Feed = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {posts.map((post) => (
          <Post
            key={post.id}
            icon={post.icon}
            image={post.image}
            name={post.name}
            caption={post.caption}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 70,
  },
});
