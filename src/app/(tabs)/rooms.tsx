import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator, TextInput } from "react-native";
import Room from "@/src/components/Room";
import { Text } from "@/src/components/Themed";
import useRooms from "@/src/hooks/useRooms";
import { useIsFocused } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import ScreenLoadingSpinner from "@/src/components/ScreenLoadingSpinner";

const Rooms = () => {
  const isFocused = useIsFocused();
  const { rooms, isLoading, error, refetch } = useRooms(`${process.env.EXPO_PUBLIC_API_URL}/salas`);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused, refetch]);

  if (isLoading) {
    return (
      <ScreenLoadingSpinner size={110} message="Cargando todas las salas..." />
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
      <View style={styles.searchSection}>
        <FontAwesome5 name="search" size={20} color="#868A90" style={styles.searchIcon} />
        <TextInput style={styles.input} onChangeText={setSearchQuery} value={searchQuery} placeholder="Busca" placeholderTextColor="#868A90" />
      </View>
      <View style={styles.centered}>
        {rooms?.records?.map((room: any, index: number) => (
          <Room key={index} sala={room.sala} estado={room.estado} id={room.id} puntomapa={room.puntomapa} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 16,
    backgroundColor: "#141518",
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 20,
    fontFamily: "Poppins",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "#424242",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginVertical: 30,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#292929",
    paddingVertical: 10
  },
});

export default Rooms;
