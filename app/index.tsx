import { StyleSheet, Text } from "react-native";

import { View } from "@/components/Themed";
import LoginForm from "@/components/auth/LoginForm";
import { Link, Redirect } from "expo-router";
import { useSession } from "@/context/ctx";

const Home = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (session) {
    return <Redirect href={"/(tabs)"} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{session}</Text>
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
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
