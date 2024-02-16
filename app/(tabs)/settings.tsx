import { useSession } from "@/context/ctx";
import { Button, Text, View } from "react-native";

const Settings = () => {
  const { signOut } = useSession();

  return (
    <View>
      <Text>Screen tres</Text>
      <Button title="Cerrar sesión" onPress={() => signOut()} />
    </View>
  );
};

export default Settings;
