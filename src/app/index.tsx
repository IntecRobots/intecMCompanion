import { StyleSheet, Text } from "react-native";

import { View } from "@/src/components/Themed";
import LoginForm from "@/src/components/auth/LoginForm";
import { Link, Redirect } from "expo-router";
import { useSession } from "@/src/context/ctx";

const Home = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (session) {
    return <Redirect href={"/(tabs)"} />;
  }

  return <LoginForm />;
};

export default Home;
