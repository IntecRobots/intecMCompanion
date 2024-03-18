import React from "react";
import { View,StyleSheet, Text } from "react-native";
import Room from "./Room";


interface PropsResult{
    rooms:any;
    romsFilter:any;
}


const ResultRooms:React.FC<PropsResult> = ({rooms,romsFilter}) =>{


    return (
        <View style={styles.centered}>
         {
         (romsFilter.length>0) ? romsFilter?.map((room: any, index: number) => (
            <Room key={index} sala={room.sala} estado={room.estado} id={room.id} puntomapa={room.puntomapa} />
          )):rooms?.records?.map((room: any, index: number) => (
            <Room key={index} sala={room.sala} estado={room.estado} id={room.id} puntomapa={room.puntomapa} />
        ))
         }
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
        paddingVertical: 10
      },
})

export default ResultRooms;