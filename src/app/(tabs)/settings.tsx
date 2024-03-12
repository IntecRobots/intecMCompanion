import { useSession } from "@/src/context/ctx";
import { Switch, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import GoogleButton from "@/src/components/GoogleButton";

const Settings = () => {
  const { signOut } = useSession();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={() => {}}>
        <Text style={styles.optionText}>Opciones app</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => {}}>
        <Text style={styles.optionText}>Opciones robot</Text>
      </TouchableOpacity>

      <View style={styles.option}>
        <Text style={styles.optionText}>Modo experto</Text>
        <Switch value={true} />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Modo oscuro</Text>
        <Switch />
      </View>
      <GoogleButton />
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  option: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#292929",
    fontFamily: "Poppins",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: {
    fontSize: 15,
    fontFamily: "Poppins",
    color: "white",
  },
  button: {
    backgroundColor: "#DB4437",
    fontFamily: "PoppinsSemiBold",
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
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    marginTop: 20,
  },
});

export default Settings;
