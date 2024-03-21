import { useSession } from "@/src/context/ctx";
import { Switch, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import GoogleButton from "@/src/components/GoogleButton";
import StyleOptionSetting from "@/src/components/StyleOptionSetting";
import SettingsHead from "@/src/components/settings/SettingsHead";
import { useState } from "react";

const Settings = () => {
  const { signOut } = useSession();
  const [darkMode, setDarkMode] = useState<boolean>(false);

  //Controlar variable de darMode de forma global
  return (
    <View style={styles.container}>
      {/* <SettingsHead 
        mode={darkMode}
      />

      <View style={styles.option}>
        <Text style={styles.optionTextLight}>Modo experto</Text>
        <Switch value={true} />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionTextLight}>Modo oscuro</Text>
        <Switch 
          onValueChange={() => setDarkMode(!darkMode)}
          value={darkMode}
        />
  </View> */}
      <GoogleButton />

      <StyleOptionSetting
        text="Cerrar sesión"
        onPress={() => signOut()}
        isDarkMode={darkMode}
        stylesBoton={styles.button}
        stylesText={styles.buttonText}
      />

      <Text style={styles.footerText}>© 2024 Intec Robots.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  optionTextLight: {
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
