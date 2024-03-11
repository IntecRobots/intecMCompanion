import React, { useCallback, useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useFocusEffect } from "expo-router";
import NotificationTabs from "@/src/components/notifications/NotificationTabs";
import ScreenLoadingSpinner from "@/src/components/ScreenLoadingSpinner";
import NotificationContainer from "@/src/components/notifications/NotificationContainer";
import { clearNotifications } from "@/src/utils/clearNotifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Notification } from "@/src/types/types";

const Notifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("unread");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

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

  if (isLoading) {
    return <ScreenLoadingSpinner size={110} />;
  }

  return (
    <View style={styles.container}>
      <NotificationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {notifications.length > 0 && (
        <Pressable
          onPress={() => {
            setNotifications([]);
            clearNotifications();
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
});

export default Notifications;
