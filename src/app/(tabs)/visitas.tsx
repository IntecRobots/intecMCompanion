import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Image,
} from "react-native";
import VisitCard from "@/src/components/VisitCard";
import { useIsFocused } from "@react-navigation/native";
import useVisits from "@/src/hooks/useVisits";

const Visitas = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const isFocused = useIsFocused();
  const { visits, isLoading, error, refetch } = useVisits(
    `${process.env.EXPO_PUBLIC_API_URL}/visitas`
  );

  const filterUpcomingVisits = (visits: any) => {
    if (!visits || !Array.isArray(visits.records)) {
      return [];
    }

    const now = new Date();
    return visits.filter((visit: any) => {
      const visitDate = new Date(`${visit.start_date}T${visit.start_time}`);
      return visitDate > now;
    });
  };

  const displayedVisits =
    activeTab === "upcoming"
      ? filterUpcomingVisits(visits.records)
      : visits.records;

  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused, refetch]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size={110} color="#3673F5" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: "white" }}>
          Error al cargar las visitas: {error}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Pressable
          onPress={() => setActiveTab("upcoming")}
          style={[styles.tab, activeTab === "upcoming" && styles.activeTab]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "upcoming" && styles.activeTabText,
            ]}
          >
            Visitas próximas
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab("all")}
          style={[styles.tab, activeTab === "all" && styles.activeTab]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "all" && styles.activeTabText,
            ]}
          >
            Todas las visitas
          </Text>
        </Pressable>
      </View>
      <ScrollView style={styles.notificationsContainer}>
        {displayedVisits.length ? (
          displayedVisits.map((visit: any, index: number) => (
            <VisitCard
              key={index}
              title={visit.nombre}
              description={visit.descripcion}
              startDate={visit.start_date}
              startTime={visit.start_time}
              room={visit.salas_sala}
            />
          ))
        ) : (
          <View style={styles.centered}>
            <Text style={styles.noVisitsText}>
              No tienes visitas programadas
            </Text>
            <Image
              source={require("../../../assets/images/errorRobot.png")}
              style={styles.errorImage}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  errorImage: { height: 200, width: 200 },
  container: {
    flex: 1,
  },
  activeTabText: {
    color: "#3673F5",
  },
  navigationBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1f1f1f",
  },
  navigationTitle: {
    color: "white",
    fontSize: 20,
    marginLeft: 16,
  },
  tabs: {
    flexDirection: "row",
    padding: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#3673F5",
  },
  tabText: {
    color: "white",
    fontSize: 16,
  },
  notificationsContainer: {
    flex: 1,
  },
  noVisitsText: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 160,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default Visitas;
