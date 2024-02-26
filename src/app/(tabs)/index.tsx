import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const DashboardScreen = () => {
  const chartData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50, 70],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  const summaryData = [
    { title: "Notificaciones", value: 14 },
    { title: "Visitas", value: 5 },
    { title: "Eventos", value: 10 },
    { title: "To-dos", value: 4 },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.summaryContainer}>
        {summaryData.map((item, index) => (
          <View key={index} style={styles.summaryBoxWrapper}>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryTitle}>{item.title}</Text>
              <Text style={styles.summaryValue}>{item.value}</Text>
            </View>
          </View>
        ))}
      </View>
      <Image style={styles.fullWidthImage} source={require("../../../assets/images/placeholderbot2.jpeg")} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fullWidthImage: {
    width: screenWidth,
  },
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  summaryTitle: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  summaryContainer: {
    flexDirection: "row", // Se mantiene horizontal
    flexWrap: "wrap", // Permite el ajuste automático de los elementos
    justifyContent: "space-between", // Distribuye el espacio restante
    padding: 10,
  },
  summaryBoxWrapper: {
    width: "50%", // Cada envoltorio ocupa el 50% del contenedor
    padding: 10, // Espaciado entre las tarjetas
  },
  summaryBox: {
    backgroundColor: "#242424",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    alignItems: "center",
  },
});

export default DashboardScreen;
