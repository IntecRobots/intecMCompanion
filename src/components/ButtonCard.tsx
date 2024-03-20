import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

interface ButtonCardProps {
  title: string;
  iconName: string;
  onPress: () => void;
  disabled?: boolean;
}

const screenWidth = Dimensions.get("window").width;

const ButtonCard: React.FC<ButtonCardProps> = ({ title, iconName, onPress, disabled }) => {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: `${disabled ? "#121212" : "#242424"}` }]} onPress={onPress}>
      <FontAwesome5 name={iconName} size={30} color={`${disabled ? "#ababab" : "#3673F5"}`} />
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: screenWidth / 2 - 20,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    height: 120,
  },
  cardText: {
    color: "white",
    marginTop: 10,
  },
});

export default ButtonCard;
