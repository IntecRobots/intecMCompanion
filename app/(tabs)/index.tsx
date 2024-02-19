import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useSession } from "@/context/ctx";
import { Redirect } from "expo-router";

export default function TabOneScreen() {
  const { session } = useSession();

  if (!session) {
    return <Redirect href="/" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sesión iniciada</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.body}>{session}</Text>
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
