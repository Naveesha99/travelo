import { View, StyleSheet, Image } from "react-native";
import React from "react";
import Feed from "../Components/Feed";
import images from "../Assets/images";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={images.Travelo} style={styles.headerLogo} />
      </View>
      <View style={styles.feed}>
        <Feed />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 100,
  },
  headerLogo: {
    width: 100,
    height: 40,
  },
  feed: {
    marginTop: 100,
  },
});
