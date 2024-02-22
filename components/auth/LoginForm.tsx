import { useSession } from "@/context/ctx";
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useSession();

  return (
    <View style={styles.container}>
      <View style={styles.curveShape}>
        <Image
          source={require("../../assets/images/favicon.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.loginCard}>
        <Text style={styles.loginTitle}>Iniciar sesión</Text>
        <TextInput placeholderTextColor="black" placeholder="Nombre de usuario..." value={username} onChangeText={setUsername} style={styles.input} />
        <TextInput
          placeholderTextColor="black"
          placeholder="Contraseña..."
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => signIn(username, password)} style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>
          ¿No estás registrado? <Text style={styles.signupLink}>Contacta con nosotros</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    position: "absolute",
    top: 100,
  },
  curveShape: {
    position: "absolute",
    width: "100%",
    height: "50%",
    backgroundColor: "#5C6BC0",
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    bottom: "50%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginCard: {
    width: "85%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 10, // Sombras para Android
    shadowColor: "#000", // Sombras para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#E8EAF6",
    width: "100%",
    height: 50,
    marginBottom: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#3F51B5",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupText: {
    marginTop: 20,
    color: "#333",
    textAlign: "center",
  },
  signupLink: {
    color: "#3F51B5",
    fontWeight: "bold",
  },
});

export default LoginForm;
