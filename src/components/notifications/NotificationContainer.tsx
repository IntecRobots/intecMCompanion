import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import NotificationCard from "./NotificationCard";
import NoDataError from "../NoDataError";
import { Notification } from "@/src/types/types";

interface NotificationContainerProps {
  // notifications: Notification[];
  notifications: any;
}

const NotificationContainer: React.FC<NotificationContainerProps> = ({ notifications }) => {
  
  return (
    <ScrollView style={styles.notificationsContainer}>
      {notifications.length ? (
        notifications
          .reverse()
          .map((notification: any, k: number) => <NotificationCard key={k} body={notification?.data?.body} title={notification?.data?.title} />)
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
