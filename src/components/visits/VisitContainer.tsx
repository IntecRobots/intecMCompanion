import { Visit } from "@/src/types/types";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import VisitCard from "../VisitCard";
import NoDataError from "../NoDataError";
import useTheme from "@/src/hooks/useTheme";

interface VisitContainerProps {
  visits: Visit[];
}

const VisitContainer: React.FC<VisitContainerProps> = ({ visits }) => {
  const {color,background,borderColorNotifier} = useTheme();
  console.log(borderColorNotifier)
  return (
    <ScrollView style={styles.visitContainer}>
      {visits.length ? (
        visits.map((visit: any, index: number) => (
          <VisitCard
            key={index}
            title={visit.nombre}
            description={visit.descripcion}
            startDate={visit.start_date}
            startTime={visit.start_time}
            room={visit.salas_sala}
            color={color}
            background={background}
            border={borderColorNotifier}
          />
        ))
      ) : (
        <NoDataError message="No tienes visitas pendientes" />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  visitContainer: {
    flex: 1,
  },
});

export default VisitContainer;
