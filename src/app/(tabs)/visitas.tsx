import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import useVisits from "@/src/hooks/useVisits";
import VisitTabs from "@/src/components/visits/VisitTabs";
import { filterUpcomingVisits } from "@/src/utils/filterUpcomingVisits";
import VisitContainer from "@/src/components/visits/VisitContainer";
import ScreenLoadingSpinner from "@/src/components/ScreenLoadingSpinner";

const Visitas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("upcoming");
  const { visits, isLoading, error, refetch } = useVisits(`${process.env.EXPO_PUBLIC_API_URL}/visitas`);
  const isFocused = useIsFocused();

  const displayedVisits = activeTab === "upcoming" ? filterUpcomingVisits(visits) : visits.records;


  
  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused, refetch]);

  if (isLoading) {
    return <ScreenLoadingSpinner message="Cargando tus visitas..." size={110} />;
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: "white" }}>Error al cargar las visitas: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <VisitTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <VisitContainer visits={displayedVisits} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default Visitas;
