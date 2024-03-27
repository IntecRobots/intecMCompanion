import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import useVisits from "@/src/hooks/useVisits";
import VisitTabs from "@/src/components/visits/VisitTabs";
import { filterUpcomingVisits } from "@/src/utils/filterUpcomingVisits";
import VisitContainer from "@/src/components/visits/VisitContainer";
import ScreenLoadingSpinner from "@/src/components/ScreenLoadingSpinner";
import SearchBar from "@/src/components/SearchBar";

const Visitas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("upcoming");
  const { visits, isLoading, error, refetch } = useVisits(`${process.env.EXPO_PUBLIC_API_URL}/visitas`);
  const [currentVisits, setCurrentVisits] = useState<any>(visits);
  const isFocused = useIsFocused();

  
  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused, refetch]);

  


  const displayedVisits = activeTab === "upcoming" ? filterUpcomingVisits(currentVisits)
   : (typeof currentVisits ==='object')? currentVisits:visits.records;

  
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
     <SearchBar
          dataArray={visits.records}
          setDataArray={setCurrentVisits}
          searchFields={["nombre"]} 
      />

      {<VisitTabs activeTab={activeTab} setActiveTab={setActiveTab} />
}
      
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
