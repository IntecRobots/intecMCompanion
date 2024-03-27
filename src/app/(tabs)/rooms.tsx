import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "@/src/components/Themed";
import useRooms from "@/src/hooks/useRooms";
import { useIsFocused } from "@react-navigation/native";
import ScreenLoadingSpinner from "@/src/components/ScreenLoadingSpinner";
import ResultRooms from "@/src/components/ResultRooms";
import SearchBar from "@/src/components/SearchBar";

const Rooms = () => {
  const isFocused = useIsFocused();
  const { rooms, isLoading, error, refetch } = useRooms(`${process.env.EXPO_PUBLIC_API_URL}/salas`);
  const [currentRooms, setCurrentRooms] = useState<any>(rooms);

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
      <SearchBar
        dataArray={rooms.records}
        setDataArray={setCurrentRooms}
        searchFields={["sala"]} 
      />


      <ResultRooms
        rooms={currentRooms}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
