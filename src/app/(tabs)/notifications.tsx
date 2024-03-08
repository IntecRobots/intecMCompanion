import React, { useCallback, useState } from "react";
import { ScrollView, View, Text, Pressable, StyleSheet, Image, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Notification from "@/src/components/notifications/Notification";
import { useFocusEffect } from "expo-router";
import NotificationTabs from "@/src/components/notifications/NotificationTabs";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("unread");
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState<any>([]);

  const loadNotifications = async () => {
    setIsLoading(true);
    const storedNotifications = await AsyncStorage.getItem("@notifications");
    if (storedNotifications) {
      setNotifications(JSON.parse(storedNotifications));
    }
    setIsLoading(false);
  };

  const clearNotifications = async () => {
    try {
      await AsyncStorage.removeItem("@notifications");
      console.log("Notifications cleared");
      setNotifications([]);
    } catch (error) {
      console.error("Error clearing notifications:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadNotifications();
    }, [])
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={110} color="#3673F5" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NotificationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {notifications.length ? (
        <>
          <Pressable onPress={() => clearNotifications()}>
            <Text style={styles.clearText}>Borrar notificaciones</Text>
          </Pressable>
          <ScrollView style={styles.notificationsContainer}>
            {notifications.reverse().map((notification: any, k: number) => (
              <Notification
                key={k}
                body={notification?.request?.content?.body}
                title={notification?.request?.content?.title}
                isRead={notification.isRead}
                showButtons={notification?.request?.content?.data?.showButtons}
              />
            ))}
          </ScrollView>
        </>
      ) : (
        <View style={styles.centered}>
          <Text style={styles.noNotificationsText}>No tienes notificaciones</Text>
          <Image source={require("../../../assets/images/errorRobot.png")} style={styles.errorImage} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  noNotificationsText: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  errorImage: { height: 200, width: 200 },
  container: {
    flex: 1,
  },
  clearText: {
    color: "#bdbdbd",
    textAlign: "right",
    fontSize: 15,
    padding: 10,
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
  notificationsContainer: {
    flex: 1,
  },
});

export default Notifications;
