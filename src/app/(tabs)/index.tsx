import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Dimensions, ActivityIndicator, Image } from "react-native";
import useCalendar from "@/src/hooks/useCalendar";
import { useNavigation } from "expo-router";
import ButtonCard from "@/src/components/ButtonCard";

const DashboardScreen: React.FC = () => {
  const { events, loading, error } = useCalendar();
  // const navigation: any = useNavigation();
  console.log(error);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size={110} color="#3673F5" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>Bienvenido, User</Text>
      <View style={styles.buttonContainer}>
        <ButtonCard title="Añadir evento" iconName="calendar" onPress={() => {}} />
        <ButtonCard title="Control remoto" iconName="robot" onPress={() => {}} />
        <ButtonCard title="Videollamada" iconName="video" onPress={() => {}} />
        <ButtonCard title="Gestionar salas" iconName="table" onPress={() => {}} />
      </View>
      <Text style={styles.titleText}>Próximos eventos</Text>
      <View style={styles.summaryContainer}>
        {!error ? (
          events.slice(-4).map((event: any, index: number) => (
            <View key={index} style={styles.summaryBoxWrapper}>
              <View style={styles.summaryBox}>
                <Text style={styles.eventTitleText} numberOfLines={2} key={event.id}>
                  {event.summary}
                </Text>
                <Text style={styles.eventCreatorText}>Estado: {event.status}</Text>
                <Text style={styles.eventDateText}>{formatDate(event.start.dateTime)}</Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.centered}>
            <Text style={styles.error}>{error ? error : "Inicia sesión con Google para ver tus eventos de Calendar."}</Text>
            <Image source={require("../../../assets/images/errorRobot.png")} style={styles.errorImage} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  errorImage: { height: 200, width: 200 },
  error: { marginBottom: 30, color: "white", marginTop: 10 },
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
    fontFamily: "PoppinsSemiBold",
    paddingVertical: 15,
  },
  eventTitleText: {
    marginBottom: 20,
    color: "white",
    fontFamily: "PoppinsSemiBold",
  },
  eventDateText: {
    color: "#3673F5",
    fontFamily: "Poppins",
  },
  eventCreatorText: {
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
    paddingVertical: 10,
  },
});

export default DashboardScreen;
