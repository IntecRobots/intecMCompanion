import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"; // Importa Image y StyleSheet

interface VisitCardProps {
  title: string;
  description: string;
  visitors: string[];
  date: string;
  imageUrl: string;
}

const VisitCard: React.FC<VisitCardProps> = ({ title, description, visitors, date, imageUrl }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={require("../../assets/images/placeholder.jpg")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">{description}</Text>
        <Text style={styles.italicText}>{date}</Text>
        <Text style={styles.boldText}>{visitors.length} visitantes</Text>
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
    height: 150,
  },
  image: {
    width: 120,
    height: "100%",
  },
  textContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    color: "#CCCCCC",
    overflow: 'hidden',
  },
  boldText: {
    fontWeight: "bold",
    color: "#5C6BC0",
  },
  italicText: {
    fontStyle: "italic",
    color: "white",
  },
});


export default VisitCard;
