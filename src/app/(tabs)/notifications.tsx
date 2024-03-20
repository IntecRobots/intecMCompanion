import React, { useCallback, useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useFocusEffect } from "expo-router";
import NotificationTabs from "@/src/components/notifications/NotificationTabs";
import ScreenLoadingSpinner from "@/src/components/ScreenLoadingSpinner";
import NotificationContainer from "@/src/components/notifications/NotificationContainer";
import useGetNotifications from "@/src/hooks/useGetNotifications";

const Notifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("unread");
  const { notifications, isLoading, error, refetch } = useGetNotifications();  

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  if (isLoading) {
    return <ScreenLoadingSpinner size={110} message="Cargando tus notificaciones..." />;
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error al cargar tus notificaciones</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NotificationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {notifications.length > 0 && (
        <Pressable
          onPress={() => {
            console.log("clearing notifications...");
          }}
        >
          <Text style={{ color: "white" }}>Borrar notificaciones</Text>
        </Pressable>
      )}
      <NotificationContainer notifications={notifications} />
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
    borderTopWidth: 1,
    borderColor: "#292929",
    paddingVertical: 10,
  },
});

export default Notifications;
