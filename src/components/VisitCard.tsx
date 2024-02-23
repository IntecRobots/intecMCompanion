import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"; // Importa Image y StyleSheet

interface VisitCardProps {
  title: string;
  description: string;
  visitors: string[];
  date: string;
  imageUrl: string; // Añade una prop para la URL de la imagen
}

const VisitCard: React.FC<VisitCardProps> = ({
  title,
  description,
  visitors,
  date,
  imageUrl,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={require("../../assets/images/placeholderbot.jpeg")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ color: "white" }}>{description}</Text>
        <Text style={styles.boldText}>Visitantes:</Text>
        {visitors.map((visitor, index) => (
          <Text style={{ color: "white" }} key={index}>
            {visitor}
          </Text> // Cambiado a index para evitar problemas si hay visitantes repetidos
        ))}
        <Text style={styles.italicText}>Fecha: {date}</Text>
      </View>
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#242424",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    margin: 20
  },
  image: {
    width: 100, // Ancho fijo para la imagen
    height: 100, // Altura fija para la imagen
    marginRight: 20, // Margen derecho para separar la imagen del texto
  },
  textContainer: {
    flex: 1, // Ocupa el espacio restante
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  boldText: {
    fontWeight: "bold",

    color: "white",
  },
  italicText: {
    fontStyle: "italic",

    color: "white",
  },
});

export default VisitCard;
