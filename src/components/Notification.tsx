import { StyleSheet, View, Image } from "react-native";
import { Text } from "./Themed";
import NotificationButtons from "./NotificationButtons";

interface NotificationProps {
  title: string;
  body: string;
  isRead: boolean;
  showButtons: boolean;
}

const Notification: React.FC<NotificationProps> = ({ title, body, isRead, showButtons }) => {
  return (
    <View style={[styles.container, isRead ? null : styles.unreadContainer]}>
      {!isRead && <View style={styles.unreadIndicator}></View>}
      <Image source={require("../../assets/images/placeholder.jpg")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <Text>{body}</Text>
        {showButtons && (
          <View style={styles.buttons}>
            <NotificationButtons />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242424",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginLeft: 20,
  },
  textContainer: {
    flex: 1,
  },
  unreadContainer: {
    backgroundColor: "#2A4D69",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#1e76e3",
    position: "absolute",
    left: 7,
    top: "50%",
    marginTop: 5,
  },
  normalText: {
    fontWeight: "normal",
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default Notification;
