import { useSession } from "@/src/context/ctx";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View, Text,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator } from "react-native";
import MessageErrorAuth from "../AuthMessageError";


const BodyForm= () =>{

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { signIn, loading,error } = useSession();
    const [emptyInput,setEmptyInput] =useState<string|null>(error);


    const logIn = () =>{
      if(password.length===0 ||username.length===0) {
        console.log("Entrar en empty")
        setEmptyInput("NO puede estar vacio los campos");
        return;
      } 
      
      setEmptyInput("")
      signIn(username, password);
    };

    useEffect(() =>{
      setEmptyInput(error)
    },[error])
      
    

    return(
        <View style={styles.loginCard}>
            <Text style={styles.loginTitle}>Iniciar sesión</Text>
            <TextInput
             placeholderTextColor="black"
            placeholder="Nombre de usuario..."
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            />
            <TextInput
                placeholderTextColor="black"
                placeholder="Contraseña..."
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={styles.input}
            />
            <TouchableOpacity
                onPress={() => logIn()}
                style={styles.button}
            >
          <Text style={styles.buttonText}>
            {loading ? (
              <ActivityIndicator color={"black"} size={25} />
            ) : (
              "Iniciar sesión"
            )}
          </Text>
        </TouchableOpacity>

              <MessageErrorAuth
                emptyInput={emptyInput}
              />
                        
        <Text style={styles.signupText}>
          ¿No tienes cuenta?{" "}
          <Text style={styles.signupLink}>Contacta con nosotros</Text>
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  loginCard: {
    width: "85%",
    backgroundColor: "#242424",
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    elevation: 10, // Sombras para Android
    shadowColor: "#000", // Sombras para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  loginTitle: {
    fontSize: 24,
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "PoppinsBold",
  },
  button: {
    backgroundColor: "#3673F5",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#E8EAF6",
    width: "100%",
    height: 50,
    marginBottom: 15,
    borderRadius: 5,
    fontFamily: "Poppins",
    paddingHorizontal: 10,
    fontSize: 16,
  },
  signupText: {
    marginTop: 20,
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  signupLink: {
    color: "#3673F5",
    fontWeight: "bold",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "PoppinsBold",
  },
});

export default BodyForm;