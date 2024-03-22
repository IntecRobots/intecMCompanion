import { Image, Text, View, StyleSheet, ActivityIndicator } from "react-native";
import useCalendar from "../hooks/useCalendar";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { transformEvents } from "../utils/buildAndSendEvents";

const CalendarEvents = () => {
  const { events, loading, error, refetch } = useCalendar();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused, refetch]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (loading) {
    return (
      <View style={{ marginTop: 120 }}>
        <ActivityIndicator size={80} color="#3673F5" />
        <Text style={styles.loadingText}>Cargando eventos de Calendar...</Text>
      </View>
    );
  }
  return (
    <>
      <Text style={styles.titleText}>Últimos eventos</Text>
      <View style={styles.summaryContainer}>
        {!error && events ? (
          events?.slice(-4)?.map((event: any, index: number) => (
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
            <Text style={styles.error}>{error ? error : "Inicia sesión o añade eventos a tu Calendar para mostrarlos aquí."}</Text>
            <Image source={require("../../assets/images/errorRobot.png")} style={styles.errorImage} />
          </View>
        )}
        {/* events && <Text style={{ color: "white" }}>{JSON.stringify(transformEvents(events, "1"), null, 2)}</Text> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  loadingText: { color: "white", fontFamily: "Poppins", marginTop: 25, fontSize: 12, textAlign: "center" },
  errorImage: { height: 200, width: 200 },
  error: { marginBottom: 30, color: "white", marginTop: 10 },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  titleText: {
    color: "white",
    fontSize: 25,
    marginLeft: 15,
    fontFamily: "PoppinsSemiBold",
    paddingVertical: 15,
  },
});

export default CalendarEvents;
