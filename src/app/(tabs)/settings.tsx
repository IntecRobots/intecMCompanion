import { useSession } from "@/src/context/ctx";
import { Switch, Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const Settings = () => {
  const { signOut } = useSession();

  return (
    <View style={styles.container}>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Text style={styles.optionText}>Opciones app</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Text style={styles.optionText}>Opciones robot</Text>
        </TouchableOpacity>

        <View style={styles.option}>
          <Text style={styles.optionText}>Opción 1</Text>
          <Switch value={true} />
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Modo oscuro</Text>
          <Switch />
        </View>

      </View>

      <TouchableOpacity style={styles.button} onPress={() => signOut()}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>© 2024 Intec Robots.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: "#1F1F1F",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  userCard: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    margin: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  optionsContainer: {
    // Agrega estilos si es necesario
  },
  option: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2C", // Un color ligeramente más claro que el fondo para la separación
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: {
    fontSize: 18,
    color: "white",
  },
  button: {
    backgroundColor: "#DB4437", // Un color rojo para el botón de cierre de sesión
    padding: 15,
    marginHorizontal: 100,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    color: "#7d7d7d",
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute", // Posiciona el texto en la parte inferior
    bottom: 10,
  },
});

export default Settings;
