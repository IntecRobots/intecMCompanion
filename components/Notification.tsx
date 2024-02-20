import { StyleSheet, View, Image, Button } from "react-native";
import { Text } from "./Themed";

const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.unreadIndicator}></View>
      <Image source={require("../assets/images/favicon.png")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text>
          <Text style={styles.boldText}>Alguien </Text>
          ha llegado a recepción.
          <Text style={styles.boldText}> Acepta </Text>
          o
          <Text style={styles.boldText}> rechaza </Text>
          esta notificación para hacer cosas.
        </Text>
        <View style={styles.buttons}>
          <Button title="Aceptar"></Button>
          <Button title="Cancelar"></Button>
        </View>
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
