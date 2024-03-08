import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import ButtonCard from "@/src/components/ButtonCard";
import CalendarEvents from "@/src/components/CalendarEvents";
import useCalendar from "@/src/hooks/useCalendar";
import { useIsFocused } from "@react-navigation/native";

const DashboardScreen: React.FC = () => {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>Bienvenido, User</Text>
      <View style={styles.buttonContainer}>
        <ButtonCard title="Añadir evento" iconName="calendar" onPress={() => {}} />
        <ButtonCard title="Control remoto" iconName="robot" onPress={() => {}} />
        <ButtonCard title="Videollamada" iconName="video" onPress={() => {}} />
        <ButtonCard title="Gestionar salas" iconName="table" onPress={() => {}} />
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
