import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import NotificationCard from "./NotificationCard";
import NoDataError from "../NoDataError";
import MarkNotifications from "@/src/hooks/markNotification";
import React, { useState, useEffect } from "react";

interface NotificationContainerProps {
  // notifications: Notification[];
  notifications: any;
}

const NotificationContainer: React.FC<NotificationContainerProps> = ({
  notifications,
}) => {
  const { markAsRead } = MarkNotifications();
  // Inicializa el estado local con las notificaciones pasadas como prop
  const [localNotifications, setLocalNotifications] = useState([
    ...notifications,
  ]);

  // Función para marcar una notificación como leída y actualizar el estado local
  const handleMarkAsRead = async (id: number) => {
    await markAsRead(id); // Suponemos que esta función actualiza el estado en el servidor
    // Actualiza el estado local para reflejar el cambio
    const updatedNotifications = localNotifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, leida: 1 }; // Marcar como leída
      }
      return notification;
    });
    setLocalNotifications(updatedNotifications); // Actualizar el estado con las notificaciones actualizadas
  };

  return (
    <ScrollView style={styles.notificationsContainer}>
      {localNotifications.length ? (
        localNotifications.map((notification: any, k: number) => (
          <NotificationCard
            key={k}
            id={notification.id}
            leida={notification.leida}
            body={notification?.data?.body}
            title={notification?.data?.title}
            onMarkAsRead={handleMarkAsRead} // Usar handleMarkAsRead aquí
          />
        ))
      ) : (
        <NoDataError message="No tienes notificaciones" />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  notificationsContainer: {
    flex: 1,
  },
  clearText: {
    color: "#bdbdbd",
    textAlign: "right",
    fontSize: 15,
    padding: 10,
  },
});

export default NotificationContainer;
