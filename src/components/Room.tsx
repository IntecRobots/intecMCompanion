import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Switch, ActivityIndicator, StyleProp } from "react-native";
import { useRoomUpdate } from "../hooks/useRoomUpdate";
import { TextProps } from "./Themed";

type RoomProps = {
  id?: string;
  sala: string;
  puntomapa?: string;
  estado: boolean;
  backgroundCard:any;
  color:StyleProp<TextProps>;
};

const Room: React.FC<RoomProps> = ({ id, sala, puntomapa, estado,backgroundCard,color }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(estado);
  const { isUpdating, updateRoomState } = useRoomUpdate();

  const toggleRoomState = async () => {
    if (isUpdating || !id) return;

    const newIsEnabled = !isEnabled;
    setIsEnabled(newIsEnabled);
    await updateRoomState(id, newIsEnabled);
  };

  const roomStyle = isEnabled ? styles.roomAvailable : backgroundCard;

  return (
    <TouchableOpacity style={[styles.roomContainer, roomStyle]} onPress={toggleRoomState}>
      <View>
        <Text style={[color,styles.roomText]}>{sala}</Text>
        <Text style={[color, styles.mapText]}>{puntomapa}</Text>
      </View>
      <View>
        {isUpdating ? (
          <ActivityIndicator size={"large"} color={"white"} />
        ) : (
          <Switch
            trackColor={{ false: "gray", true: "lightgray" }}
            thumbColor={"white"}
            value={isEnabled ? true : false}
            onValueChange={toggleRoomState}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  roomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    margin: 10,
    width: "90%",
    borderRadius: 10,
  },
  roomAvailable: {
    backgroundColor: "#3673F5",
  },
  roomOccupied: {
    backgroundColor: "#242424",
  },
  roomText: {

    fontFamily: "PoppinsSemiBold",
  },
  mapText: {
    fontFamily: "Poppins",
  },
});

export default Room;
