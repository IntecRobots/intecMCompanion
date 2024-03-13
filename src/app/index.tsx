import { Text } from "react-native";

import LoginForm from "@/src/components/auth/LoginForm";
import { Redirect } from "expo-router";
import { useSession } from "@/src/context/ctx";

const Home: React.FC = () => {
  const { session } = useSession();

  if (session) {
    return <Redirect href={"/(tabs)"} />;
  }

  return <LoginForm />;
};

export default Home;
