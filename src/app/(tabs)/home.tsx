import React from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../assets/images/placeholderbot.jpeg")}
        style={styles.backgroundImage}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '70%',
    height: '70%',
    resizeMode: 'cover',
  },
});

export default Home;
