import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { googleSignIn } from "../utils/googleSignIn";
import { useEffect, useState } from "react";
import { googleSignOut } from "../utils/googleSignOut";
import { useIsFocused } from "@react-navigation/native";
import { router } from "expo-router";

const GoogleButton: React.FC = () => {
  const [googleToken, setGoogleToken] = useState<any>();
  const isFocused = useIsFocused();

  console.log(googleToken);

  useEffect(() => {
    if (isFocused) {
      const loadToken = async () => {
        const token = await GoogleSignin.getTokens();
        console.log(token);
        setGoogleToken(token.accessToken);
      };
      loadToken();
    }
  }, [isFocused]);

  return (
    <View style={styles.googleButton}>
      {!googleToken ? (
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          style={styles.googleButton}
          onPress={async () => {
            await googleSignIn();
            router.replace("/(tabs)");
          }}
        />
      ) : (
        <Pressable
          onPress={() => {
            setGoogleToken(null);
            googleSignOut();
          }}
          style={styles.button}
        >
          <Text style={{ fontFamily: "PoppinsSemiBold" }}>Cerrar sesión de Google</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  googleButton: { marginTop: 20, alignItems: "center" },
  button: {
    backgroundColor: "#3673F5",
    paddingVertical: 20,
    borderRadius: 5,
    paddingHorizontal: 35,
    alignItems: "center",
    marginTop: 10,
  },
});

export default GoogleButton;
