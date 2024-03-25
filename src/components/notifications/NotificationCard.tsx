import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Text } from "../Themed";
import { useState } from "react";

interface NotificationProps {
  id: number;
  key: number;
  leida: number;
  title: string;
  body: string;
  onMarkAsRead: (id: number) => void;
}

const NotificationCard: React.FC<NotificationProps> = ({
  id,
  leida,
  title,
  body,
  onMarkAsRead,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, leida === 0 ? styles.unreadContainer : {}]} // Cambio aquí para aplicar el estilo azul cuando no esté leída
      onPress={() => onMarkAsRead(id)}
    >
      <Image
        source={require("../../../assets/images/placeholder.jpg")}
        style={styles.image} // Quitamos la opacidad modificada según el estado leída/no leída
      />
      <View style={styles.textContainer}>
        <Text style={styles.notificationTitle}>{title}</Text>
        <Text style={styles.notificationBody}>{body}</Text>
      </View>
      {leida === 0 && ( // Cambio para mostrar el indicador cuando NO esté leída
        <View style={styles.unreadIndicator}></View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  leidaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  leidaTexto: {
    marginLeft: 5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#292929",
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
    color: "white",
    fontFamily: "PoppinsSemiBold",
  },
  notificationBody: {
    fontFamily: "Poppins",
    color: "#bdbdbd",
  },
});

export default NotificationCard;
