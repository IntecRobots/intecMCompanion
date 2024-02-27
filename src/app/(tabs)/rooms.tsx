import Room from "@/src/components/Room";
import React from "react";
import { View, StyleSheet } from "react-native";

const Rooms = () => {
  const dummyRooms = ["Sala1", "Sala2", "Sala3", "Sala4"];

  return (
    <View style={styles.container}>
      {dummyRooms.map((room, index) => (
        <Room key={index} sala={room} availability={index % 2 == 0 ? true : false} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Rooms;
