import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useSession } from "@/context/ctx";
import { Redirect } from "expo-router";
import Notification from "@/components/Notification";

export default function TabOneScreen() {
  const { session } = useSession();

  if (!session) {
    return <Redirect href="/" />;
  }

  return (
    <ScrollView>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </ScrollView>
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
