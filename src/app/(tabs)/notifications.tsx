import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, View, Text, Pressable, StyleSheet, Image, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DUMMY_NOTIFICATIONS } from "@/src/utils/dummy_notifications";
import Notification from "@/src/components/Notification";
import { useFocusEffect } from "expo-router";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("all");
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

  useFocusEffect(
    useCallback(() => {
      loadNotifications();
    }, [])
  );

  const clearNotifications = async () => {
    try {
      await AsyncStorage.removeItem("@notifications");
      console.log("Notifications cleared");
      setNotifications([]); // Actualiza el estado para reflejar la eliminación
    } catch (error) {
      console.error("Error clearing notifications:", error);
    }
  };

  console.log(notifications);

  const dummy_notifications = DUMMY_NOTIFICATIONS.filter((notification) => (activeTab === "all" ? true : notification.isUnread));

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Pressable onPress={() => setActiveTab("all")} style={[styles.tab, activeTab === "all" && styles.activeTab]}>
          <Text style={styles.tabText}>Todas</Text>
        </Pressable>
        <Pressable onPress={() => setActiveTab("unread")} style={[styles.tab, activeTab === "unread" && styles.activeTab]}>
          <Text style={styles.tabText}>No leídas</Text>
        </Pressable>
      </View>
      <Button onPress={() => clearNotifications()} title="clear" />
      <Text style={{ color: "white" }}>{JSON.stringify(notifications)}</Text>
      {/* <ScrollView style={styles.notificationsContainer}>
        {dummy_notifications.length ? (
          dummy_notifications.map((notification) => (
            <Notification
              key={notification.id}
              message={notification.message}
              isUnread={notification.isUnread}
              showButtons={notification.showButtons}
            />
          ))
        ) : (
          <Text style={styles.noNotificationsText}>You have no notifications</Text>
        )}
        </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
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
  tabs: {
    flexDirection: "row",
    padding: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#007bff",
  },
  tabText: {
    color: "white",
    fontSize: 16,
  },
  notificationsContainer: {
    flex: 1,
  },
  noNotificationsText: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

export default Notifications;
