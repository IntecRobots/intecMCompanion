import { StyleSheet, View, Image, StyleProp, TextStyle } from "react-native";
import { Text, ViewProps } from "../Themed";
import NotificationButtons from "./NotificationButtons";

interface NotificationProps {
  title: string;
  body: string;
  date:string;
  color: StyleProp<TextStyle>;
  colorParagraph: StyleProp<TextStyle>;
  borderColor:any;
}

const NotificationCard: React.FC<NotificationProps> = ({ title, body,date,color,colorParagraph,borderColor }) => {
  return (
    <View style={[styles.container,borderColor]}>
      <Image source={require("../../../assets/images/placeholder.jpg")} style={styles.image} />
      <View style={[styles.textContainer]}>
        <Text style={[styles.notificationTitle,color]}>{title}</Text>
        <Text style={[styles.notificationBody,colorParagraph]}>{body}</Text>
        <Text style={[styles.notificationBody,colorParagraph]}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginLeft: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 5,
  },
  unreadContainer: {
    backgroundColor: "rgba(54, 115, 245, 0.3)",
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
  notificationTitle: {
    fontFamily: "PoppinsSemiBold",
  },
  notificationBody: {
    fontFamily: "Poppins",
  },
});

export default NotificationCard;
