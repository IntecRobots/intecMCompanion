import { StyleSheet, View, Image } from "react-native";
import { Text } from "./Themed";
import NotificationButtons from "./NotificationButtons";

interface NotificationProps {
  message: string;
  isUnread: boolean;
  showButtons: boolean;
}

const Notification: React.FC<NotificationProps> = ({ message, isUnread, showButtons }) => {
  return (
    <View style={[styles.container, isUnread ? styles.unreadContainer : null]}>
      {isUnread && <View style={styles.unreadIndicator}></View>}
      <Image source={require("../../assets/images/placeholder.jpg")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text>{message}</Text>
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
    padding: 10,
    borderRadius: 10,
    marginVertical: 7,
    marginHorizontal:10
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
    backgroundColor: "#2A4D69", // Un tono azulado para notificaciones no leídas
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
    backgroundColor: "#1e76e3", // Color azul para el indicador
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
