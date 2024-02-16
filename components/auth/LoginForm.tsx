import { useSession } from "@/context/ctx";
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signIn } = useSession();

  return (
    <View style={styles.container}>
      <TextInput placeholder="Usuario" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry={true} style={styles.input} />
      <Button title="Login" onPress={() => signIn(username, password)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginForm;
