import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ButtonCard from "@/src/components/ButtonCard";
import CalendarEvents from "@/src/components/CalendarEvents";
import { Link, Redirect, router } from "expo-router";
import useTheme from "@/src/hooks/useTheme";

const DashboardScreen: React.FC = () => {
  const {theme,color,backgroundCard} = useTheme();

  
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.titleText,color]}>Bienvenido a IntecBot</Text>
      <View style={styles.buttonContainer}>
        <ButtonCard
          title="Gestionar salas"
          iconName="table"
          onPress={() => {
            router.replace("/(tabs)/rooms");
          }}
          textColor={color}
          background={backgroundCard}
        />
        
        <Link href="/prueba" asChild>
          <ButtonCard title="Añadir evento" iconName="calendar" onPress={() => {}} 
          textColor={color}
          background={backgroundCard}
          />
        </Link>

        <ButtonCard disabled title="Control remoto" iconName="robot" onPress={() => {}} 
        textColor={color}
        background={backgroundCard}/>

        <ButtonCard disabled title="Videollamada" iconName="video" onPress={() => {}} 
        textColor={color}
        background={backgroundCard}/>
      </View>
      <CalendarEvents />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 25,
    marginLeft: 15,
    fontFamily: "PoppinsSemiBold",
    paddingVertical: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    borderTopWidth: 1,
    paddingVertical: 10,
  },
});

export default DashboardScreen;
