import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useFocusEffect } from "expo-router";
import ScreenLoadingSpinner from "@/src/components/ScreenLoadingSpinner";
import NotificationContainer from "@/src/components/notifications/NotificationContainer";
import useGetNotifications from "@/src/hooks/useGetNotifications";
import { useDeleteNotifications } from "@/src/hooks/useDeleteNotifications";

const Notifications: React.FC = () => {
  // const [activeTab, setActiveTab] = useState<string>("unread");
  const { notifications, isLoading, error, refetch } = useGetNotifications();
  const { isDeleting, deleteNotifications } = useDeleteNotifications();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [isDeleting])
  );

  if (isLoading || isDeleting) {
    return (
      <ScreenLoadingSpinner
        size={110}
        message="Cargando tus notificaciones..."
      />
    );
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
      {/* <NotificationTabs activeTab={activeTab} setActiveTab={setActiveTab} /> */}

      {notifications.length > 0 && (
        <View style={styles.clearButtonContainer}>
          <Pressable
            onPress={() => {
              deleteNotifications();
            }}
            style={styles.clearButton}
          >
            <Text style={styles.clearButtonText}>Borrar notificaciones</Text>
          </Pressable>
        </View>
      )}

      <NotificationContainer notifications={notifications} />
    </View>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#3673F5",
    opacity: 0.6,
    borderRadius: 20,
  },
  clearButtonText: {
    color: "white",
    fontFamily: "PoppinsSemiBold",
    padding: 10,
  },
  clearButtonContainer: {
    position: "absolute",
    right: 9,
    bottom: 9,
    zIndex: 1,
  },
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
