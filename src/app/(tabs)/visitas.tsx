import React, { useState } from "react";
import { ScrollView,  View, Text, Pressable, StyleSheet } from "react-native";
import VisitCard from "@/src/components/VisitCard";
import { DUMMY_VISITS } from "@/src/utils/dummy_visits";

const Visitas = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let visits = DUMMY_VISITS.filter((visit) => {
    const visitDate = new Date(visit.date);
    return activeTab === "upcoming" ? visitDate >= today : true;
  });

  if (activeTab === "upcoming") {
    visits.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Pressable onPress={() => setActiveTab("upcoming")} style={[styles.tab, activeTab === "upcoming" && styles.activeTab]}>
          <Text style={styles.tabText}>Visitas próximas</Text>
        </Pressable>
        <Pressable onPress={() => setActiveTab("all")} style={[styles.tab, activeTab === "all" && styles.activeTab]}>
          <Text style={styles.tabText}>Todas las visitas</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.notificationsContainer}>
        {visits.length ? (
          visits.map((visit: any, index: number) => (
            <VisitCard
              key={index}
              title={visit.title}
              description={visit.description}
              visitors={visit.visitors}
              date={visit.date}
              imageUrl={visit.imageUrl}
            />
          ))
        ) : (
          <Text style={styles.noNotificationsText}>No hay visitas programadas</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  navigationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1f1f1f',
  },
  navigationTitle: {
    color: 'white',
    fontSize: 20,
    marginLeft: 16,
  },
  tabs: {
    flexDirection: 'row',
    padding: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#007bff',
  },
  tabText: {
    color: 'white',
    fontSize: 16,
  },
  notificationsContainer: {
    flex: 1,
  },
  noNotificationsText: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Visitas;
