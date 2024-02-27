import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text, View } from "@/src/components/Themed";
import { useSession } from "@/src/context/ctx";
import { useEffect, useState } from "react";


export default function ModalScreen() {
  const { session } = useSession();
  const [token, setToken] = useState<any>("");

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem("pushtoken");
      setToken(token)
    };
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sesión iniciada</Text>
      <Text style={styles.title}>{process.env.EXPO_PUBLIC_API_URL}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.body}>{session}</Text>
      <Text style={styles.body}>{token}</Text>
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
