import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Switch, ActivityIndicator } from "react-native";
import { useRoomUpdate } from "../hooks/useRoomUpdate";

type RoomProps = {
  id?: string;
  sala: string;
  puntomapa?: string;
  estado: boolean;
};

const RoomItem: React.FC<RoomProps> = ({ id, sala, puntomapa, estado }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(estado);
  const { isUpdating, updateRoomState } = useRoomUpdate();

  const toggleRoomState = async () => {
    if (isUpdating || !id) return;

    const newIsEnabled = !isEnabled;
    setIsEnabled(newIsEnabled);
    await updateRoomState(id, newIsEnabled);
  };

  const roomStyle = isEnabled ? styles.roomAvailable : styles.roomOccupied;

  return (
    <TouchableOpacity style={[styles.roomContainer, roomStyle]} onPress={toggleRoomState}>
      <View>
        <Text style={styles.roomText}>{sala}</Text>
        <Text style={styles.mapText}>{puntomapa}</Text>
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
    color: "white",
    fontFamily: "PoppinsSemiBold",
  },
  mapText: {
    color: "white",
    fontFamily: "Poppins",
  },
});

export default RoomItem;
