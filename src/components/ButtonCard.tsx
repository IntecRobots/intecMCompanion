import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

interface ButtonCardProps {
  title: string;
  iconName: string;
  onPress: () => void;
}

const screenWidth = Dimensions.get("window").width;

const ButtonCard: React.FC<ButtonCardProps> = ({ title, iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <FontAwesome5 name={iconName} size={20} color="#3673F5" />
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: screenWidth / 2 - 20,
    backgroundColor: "#242424",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    height: 120
  },
  cardText: {
    color: "white",
    marginTop: 10,
  },
});

export default ButtonCard;
