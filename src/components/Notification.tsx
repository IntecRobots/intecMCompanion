import { StyleSheet, View, Image, Button, Pressable } from "react-native";
import { Text } from "./Themed";

interface NotificationProps {
  message: string;
  isUnread: boolean;
  showButtons: boolean;
}

const Notification: React.FC<NotificationProps> = ({ message, isUnread, showButtons }) => {
  return (
    <View style={styles.container}>
      {isUnread && <View style={styles.unreadIndicator}></View>}
      <Image source={require("../../assets/images/favicon.png")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text>{message}</Text>
        {showButtons && (
          <View style={styles.buttons}>
            <Pressable>
              <Text>Accept</Text>
            </Pressable>
            <Pressable>
              <Text>Reject</Text>
            </Pressable>
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
    marginVertical: 5,
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
    backgroundColor: "#a30707",
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
