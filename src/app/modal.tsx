import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text, View } from "@/src/components/Themed";
import { useSession } from "@/src/context/ctx";
import { useEffect, useState } from "react";

export default function ModalScreen() {
  const { session } = useSession();
  const [token, setToken] = useState<any>("");
  const [googleToken, setGoogleToken] = useState<any>("");

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem("pushtoken");
      const gtoken = await AsyncStorage.getItem("googletoken");
      setToken(token);
      setGoogleToken(gtoken)
    };
    loadToken();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Url del backend</Text>
      <Text style={styles.title}>{process.env.EXPO_PUBLIC_API_URL}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="#292929" />
      <Text style={styles.title}>Token inicio de sesión</Text>
      <Text style={styles.body}>{session}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="#292929" />
      <Text style={styles.title}>Expo PushToken</Text>
      <Text style={styles.body}>{token}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="#292929" />
      <Text style={styles.title}>Token de google</Text>
      <Text style={styles.body}>{googleToken}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    fontSize: 10,
    fontWeight: "400",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
