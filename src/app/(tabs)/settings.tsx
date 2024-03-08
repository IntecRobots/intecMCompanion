import { useSession } from "@/src/context/ctx";
import { Switch, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = () => {
  const { signOut } = useSession();

  GoogleSignin.configure({
    webClientId: "846381216746-2kl8npfsnbrmti0oaalcpuq8k13rtbn0.apps.googleusercontent.com",
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  return (
    <View style={styles.container}>
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

      <View style={styles.googleButton}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          style={styles.googleButton}
          onPress={async () => {
            try {
              console.log("Checking for Google Play Services...");
              await GoogleSignin.hasPlayServices();
              console.log("Google Play Services are available.");

              console.log("Attempting to sign in...");
              const userInfo = await GoogleSignin.signIn();
              await AsyncStorage.setItem("googletoken", userInfo.idToken as string);

              const tokens = await GoogleSignin.getTokens();

              await AsyncStorage.setItem("accestoken", tokens.accessToken as string);

              console.log("Sign in successful:", userInfo);
            } catch (error: any) {
              console.error("Sign in error:", error);

              if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.warn("Sign in was cancelled by the user.");
              } else if (error.code === statusCodes.IN_PROGRESS) {
                console.warn("Sign in is already in progress.");
              } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.error("Google Play Services not available.");
              } else {
                console.error("An unknown error occurred during Google Sign In.");
              }
            }
          }}
        />
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
  googleButton: { marginTop: 20, alignItems: "center" },
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
