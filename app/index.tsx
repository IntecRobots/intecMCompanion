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

  return <LoginForm />;
};

export default Home;
