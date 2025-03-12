import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Feed from "../Components/Feed";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../Assets/images/Travelo.png")}
          style={styles.headerLogo}
        />
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
