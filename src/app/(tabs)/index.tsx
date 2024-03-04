import { MonoText } from "@/src/components/StyledText";
import useCalendar from "@/src/hooks/useCalendar";
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const DashboardScreen = () => {
  const { events, loading, error } = useCalendar();

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.summaryContainer}>
        {events.map((event: any, index: number) => (
          <View key={index} style={styles.summaryBoxWrapper}>
            <View style={styles.summaryBox}>
              <MonoText style={{ color: "white" }} key={event.id}>
                {event.summary}
              </MonoText>
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  summaryBoxWrapper: {
    width: "50%",
    padding: 10,
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
