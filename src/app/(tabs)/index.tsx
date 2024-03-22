import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ButtonCard from "@/src/components/ButtonCard";
import CalendarEvents from "@/src/components/CalendarEvents";
import { router } from "expo-router";

const DashboardScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>Bienvenido a IntecBot</Text>
      <View style={styles.buttonContainer}>
        <ButtonCard
          title="Gestionar salas"
          iconName="table"
          onPress={() => {
            router.replace("/(tabs)/rooms");
          }}
        />
        <ButtonCard disabled title="Añadir evento" iconName="calendar" onPress={() => {}} />
        <ButtonCard disabled title="Control remoto" iconName="robot" onPress={() => {}} />
        <ButtonCard disabled title="Videollamada" iconName="video" onPress={() => {}} />
      </View>
      <CalendarEvents />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    color: "white",
    fontSize: 25,
    marginLeft: 15,
    fontFamily: "PoppinsSemiBold",
    paddingVertical: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#292929",
    paddingVertical: 10,
  },
});

export default DashboardScreen;
