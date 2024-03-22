import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,TextStyle, StyleProp, TouchableOpacityProps } from "react-native";

interface ButtonCardProps {
  title: string;
  iconName: string;
  onPress: () => void;
  disabled?: boolean;
  textColor:StyleProp<TextStyle>;
  background:any;
}

const screenWidth = Dimensions.get("window").width;

const ButtonCard: React.FC<ButtonCardProps> = ({ title, iconName, onPress, disabled,textColor,background }) => {

  const styleCard = [
    styles.card,
    (disabled) ? {backgroundColor:"#121212"}:background,
  ];
  
  return (
    <TouchableOpacity style={styleCard} onPress={onPress}>
      <FontAwesome5 name={iconName} size={30} color={`${disabled ? "#ababab" : "#3673F5"}`} />
      <Text style={[styles.cardText,textColor]}>{title}</Text>
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
    marginTop: 10,
  },
});

export default ButtonCard;
