import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Switch, ActivityIndicator } from "react-native";
import { useRoomUpdate } from "../hooks/useRoomUpdate";

type RoomProps = {
  id?: string;
  sala: string;
  puntomapa?: string;
  estado: boolean;
};

const Room: React.FC<RoomProps> = ({ id, sala, puntomapa, estado }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(estado);
  const { isUpdating, updateRoomState } = useRoomUpdate();

  console.log(estado);

  const toggleRoomState = async () => {
    if (isUpdating || !id) return;

    const newIsEnabled = !isEnabled;
    setIsEnabled(newIsEnabled);
    await updateRoomState(id, newIsEnabled);
  };

  const roomStyle = isEnabled ? styles.roomAvailable : styles.roomOccupied;

  return (
    <TouchableOpacity style={[styles.roomContainer, roomStyle]} onPress={toggleRoomState}>
      <Text style={styles.roomText}>{sala}</Text>
      <View>
        {isUpdating ? (
          <ActivityIndicator size={"large"} color={"white"} />
        ) : (
          <Switch
            trackColor={{ false: "#ff4d4d", true: "#33cc33" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
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
    padding: 20,
    margin: 10,
    width: "90%",
    borderRadius: 10,
  },
  roomAvailable: {
    backgroundColor: "#33cc33", // Verde para disponible
  },
  roomOccupied: {
    backgroundColor: "#ff4d4d", // Rojo para ocupado
  },
  roomText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Room;
function useRoomUpdater(): { isUpdating: any; updateRoomState: any } {
  throw new Error("Function not implemented.");
}
