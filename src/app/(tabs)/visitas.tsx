import React from "react";
import { ScrollView } from "react-native";
import VisitCard from "@/src/components/VisitCard";
import { DUMMY_VISITS } from "@/src/utils/dummy_visits";

const Visitas: React.FC = () => {
  return (
    <ScrollView>
      {DUMMY_VISITS.map((visit, index) => (
        <VisitCard
          key={index}
          title={visit.title}
          description={visit.description}
          visitors={visit.visitors}
          date={visit.date}
          imageUrl={visit.imageUrl} // Pasar la URL de la imagen como prop
        />
      ))}
    </ScrollView>
  );
};

export default Visitas;
