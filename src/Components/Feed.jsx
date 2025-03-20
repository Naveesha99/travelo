import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import React from "react";
import Post from "./Post";
import images from "../Assets/images";

// Get the screen width to help with sizing
const { width } = Dimensions.get("window");

const posts = [
  {
    id: 1,
    icon: images.profile1,
    image: images.post1,
    name: "John Doe",
    caption: "Beautiful sunset",
    likes: 10,
    comments: 2,
  },
  {
    id: 2,
    icon: images.profile2,
    image: images.post2,
    name: "Jane Doe",
    caption: "Beautiful sunrise",
    likes: 20,
    comments: 5,
  },
  {
    id: 3,
    icon: images.profile3,
    image: images.post3,
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
            icon={post.icon || { uri: "https://via.placeholder.com/50" }} // Fallback
            image={post.image || { uri: "https://via.placeholder.com/300x200" }} // Fallback
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
