import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import NotificationCard from "./NotificationCard";
import NoDataError from "../NoDataError";
import { Notification } from "@/src/types/types";

interface NotificationContainerProps {
  notifications: Notification[];
}

const NotificationContainer: React.FC<NotificationContainerProps> = ({ notifications }) => {
  return (
    <ScrollView style={styles.notificationsContainer}>
      {notifications.length ? (
        notifications
          .reverse()
          .map((notification: any, k: number) => (
            <NotificationCard
              key={k}
              body={notification?.request?.content?.body}
              title={notification?.request?.content?.title}
              isRead={notification.isRead}
              showButtons={notification?.request?.content?.data?.showButtons}
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
