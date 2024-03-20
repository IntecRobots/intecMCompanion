import React from "react";
import { View, StyleSheet } from "react-native";
import Room from "./Room";
import NoDataError from "./NoDataError";

interface PropsResult {
  rooms: any;
}

const ResultRooms: React.FC<PropsResult> = ({ rooms }) => {
  return (
    <View style={styles.centered}>
      {rooms.length ? rooms?.map((room: any, index: number) => (
        <Room key={index} sala={room.sala} estado={room.estado} id={room.id} puntomapa={room.puntomapa} />
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
