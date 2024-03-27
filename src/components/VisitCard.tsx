import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"; // Importa Image y StyleSheet
import { Visit } from "../types/types";

const VisitCard: React.FC<Visit> = ({
  title,
  description,
  room,
  startDate,
  startTime,
  color,
  background,
  border
}) => {
  return (
    <View style={[border,styles.cardContainer]}>
      <Image
        source={require("../../assets/images/placeholder.jpg")}
        style={styles.image}
      />
      <View style={[styles.textContainer,background]}>
        <View>
          <Text style={[styles.title,color]} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {description}
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={[styles.italicText,color]}>
            {startDate} - {startTime}
          </Text>
          <Text style={styles.boldText}>{room}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#242424",
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
    overflow: "hidden",
    height: 140,
  },
  image: {
    width: 120,
    height: "100%",
  },
  textContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "PoppinsBold",
  },
  description: {
    color: "#CCCCCC",
    fontSize: 13,
    fontFamily: "Poppins",
    overflow: "hidden",
  },
  boldText: {
    fontFamily: "PoppinsBold",
    fontSize: 13,
    color: "#3673F5",
  },
  italicText: {
    fontFamily: "PoppinsItalic",
    fontSize: 13,
  },
});

export default VisitCard;
