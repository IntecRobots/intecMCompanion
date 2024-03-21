import React from "react";
import { View, StyleSheet } from "react-native";
import RoomItem from "./Room";
import NoDataError from "./NoDataError";
import { Room } from "../types/types";

interface PropsResult {
  rooms: Room[];
}

const ResultRooms: React.FC<PropsResult> = ({ rooms }) => {

  return (
    <View style={styles.centered}>
      {rooms.length ? rooms?.map((room: any, index: number) => (
        <RoomItem key={index} sala={room.sala} estado={room.estado} id={room.id} puntomapa={room.puntomapa} />
      )) : <NoDataError message="No se han encontrado salas con ese nombre" />} 
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#292929",
    paddingVertical: 10,
  },
});

export default ResultRooms;
