import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Switch } from "react-native";

type RoomProps = {
  id?: string;
  sala: string;
  puntomapa?: string;
  availability: boolean;
};

const Room: React.FC<RoomProps> = ({ id, sala, puntomapa, availability }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(availability);

  const toggleRoomState = () => {
    setIsEnabled(!isEnabled);
  };

  const roomStyle = isEnabled ? styles.roomAvailable : styles.roomOccupied;

  return (
    <TouchableOpacity style={[styles.roomContainer, roomStyle]} onPress={toggleRoomState}>
      <Text style={styles.roomText}>{sala}</Text>
      <View>
        <Switch
          trackColor={{ false: "#ff4d4d", true: "#33cc33" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          value={isEnabled}
          onValueChange={toggleRoomState}
        />
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
