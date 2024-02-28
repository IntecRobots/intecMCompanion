import Room from "@/src/components/Room";
import { Text } from "@/src/components/Themed";
import useRooms from "@/src/hooks/useRooms";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

const Rooms = () => {
  const { rooms, isLoading, error } = useRooms(`${process.env.EXPO_PUBLIC_API_URL}/salas`);

  if (isLoading) return <Text>Cargando...</Text>;
  if (error) return <Text>Error al cargar las salas</Text>;

  console.log(rooms);

  return (
    <ScrollView style={styles.container}>
      {rooms?.records?.map((room: any, index: number) => (
        <Room key={index} sala={room.sala} estado={room.estado} id={room.id} puntomapa={room.puntomapa} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Rooms;
