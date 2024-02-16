import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import LoginForm from "@/components/auth/LoginForm";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.title} href={"/(tabs)"}>
        Ir a tabs
      </Link>
      <LoginForm />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
