import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Dimensions, ActivityIndicator } from "react-native";
import useCalendar from "@/src/hooks/useCalendar";
import { useNavigation } from "expo-router";
import ButtonCard from "@/src/components/ButtonCard";

const DashboardScreen: React.FC = () => {
  const { events, loading, error } = useCalendar();
  // const navigation: any = useNavigation(); // Descomentar si vas a usar la navegación

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size={120} color="#3673F5" />
      </View>
    );
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {/*  <LinearGradient
              colors={["#000044", "black"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.container}
            >*/}
      {/*  </LinearGradient>>*/}
      <Text style={styles.titleText}>Bienvenido</Text>
      <View style={styles.buttonContainer}>
        <ButtonCard title="Videollamada" iconName="video" onPress={() => {}} />
        <ButtonCard title="Control remoto" iconName="heart" onPress={() => {}} />
        <ButtonCard title="Añadir evento" iconName="calendar" onPress={() => {}} />
        <ButtonCard title="Gestionar salas" iconName="star" onPress={() => {}} />
      </View>
      <Text style={styles.titleText}>Próximos eventos</Text>
      <View style={styles.summaryContainer}>
        {events ? events.slice(-4).map((event: any, index: number) => (
          <View key={index} style={styles.summaryBoxWrapper}>
            <View style={styles.summaryBox}>
              <Text style={styles.eventText} numberOfLines={2} key={event.id}>
                {event.summary}
              </Text>
              <Text style={styles.eventText}>{event.start.dateTime}</Text>
            </View>
          </View>
        )) : <Text>Inicia sesión con Google para ver tus eventos de Calendar.</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  titleText: {
    color: "white",
    fontSize: 25,
    marginLeft: 15,
    fontFamily: "PoppinsMedium",
    paddingVertical: 15,
  },
  eventText: {
    color: "white",
    fontFamily: "Poppins",
  },
  welcomeTitle: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginVertical: 20,
  },
  summaryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#292929",
  },
  summaryBoxWrapper: {
    width: "50%",
    padding: 10,
  },
  summaryBox: {
    backgroundColor: "#242424",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#292929",
    paddingVertical: 10
  },
});

export default DashboardScreen;
