import React, { useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Notification from "@/src/components/Notification";
import { useFocusEffect } from "expo-router";

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

  useFocusEffect(
    useCallback(() => {
      loadNotifications();
    }, [])
  );

  const clearNotifications = async () => {
    try {
      await AsyncStorage.removeItem("@notifications");
      console.log("Notifications cleared");
      setNotifications([]);
    } catch (error) {
      console.error("Error clearing notifications:", error);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={110} color="#3673F5" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Pressable
          onPress={() => setActiveTab("unread")}
          style={[styles.tab, activeTab === "unread" && styles.activeTab]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "unread" && styles.activeTabText,
            ]}
          >
            No leídas
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab("all")}
          style={[styles.tab, activeTab === "all" && styles.activeTab]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "all" && styles.activeTabText,
            ]}
          >
            Todas
          </Text>
        </Pressable>
      </View>
      {notifications.length ? (
        <>
          <Pressable onPress={() => clearNotifications()}>
            <Text style={styles.clearText}>Clear notifications</Text>
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
          <Text style={styles.noNotificationsText}>
            No tienes notificaciones
          </Text>
          <Image
            source={require("../../../assets/images/errorRobot.png")}
            style={styles.errorImage}
          />
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
  tabs: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#292929",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#3673F5",
  },
  activeTabText: {
    color: "#3673F5",
  },
  tabText: {
    color: "white",
    fontSize: 16,
  },
  notificationsContainer: {
    flex: 1,
  },
});

export default Notifications;
