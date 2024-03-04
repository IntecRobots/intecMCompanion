import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator, TextInput } from "react-native";
import Room from "@/src/components/Room";
import { Text } from "@/src/components/Themed";
import useRooms from "@/src/hooks/useRooms";
import { useIsFocused } from "@react-navigation/native";

const Rooms = () => {
  const isFocused = useIsFocused();
  const { rooms, isLoading, error, refetch } = useRooms(`${process.env.EXPO_PUBLIC_API_URL}/salas`);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused, refetch]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#5C6BC0" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error al cargar las salas</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder="Busca"
        placeholderTextColor="#868A90"
      />
      {rooms?.records?.map((room: any, index: number) => (
        <Room key={room.id} sala={room.sala} estado={room.estado} id={room.id} puntomapa={room.puntomapa} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginVertical: 30,
    paddingHorizontal: 16,
  },
  searchBar: {
    fontSize: 18,
    backgroundColor: '#141518',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    marginTop: 20
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Rooms;
