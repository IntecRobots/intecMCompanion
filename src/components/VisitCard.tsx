import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"; // Importa Image y StyleSheet

interface VisitCardProps {
  title: string;
  description: string;
  room: string;
  startDate: string;
  startTime: string;
}

const VisitCard: React.FC<VisitCardProps> = ({
  title,
  description,
  room,
  startDate,
  startTime,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={require("../../assets/images/placeholder.jpg")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
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
          <Text style={styles.italicText}>
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
    color: "white",
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
    color: "white",
  },
});

export default VisitCard;
