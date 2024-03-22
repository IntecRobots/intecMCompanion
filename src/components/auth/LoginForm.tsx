import { useSession } from "@/src/context/ctx";
import React, { useState } from "react";

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import BodyForm from "./FormBody";
import LoginFormHeader from "./LoginFormHeader";

const LoginForm = () => {

  return (
    <View testID="login-form" style={styles.container}>
      <LoginFormHeader/>
      <BodyForm/>
      <Text style={styles.footerText}>© 2024 Intec Robots.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    marginTop: 15,
    color: "#7d7d7d",
    fontFamily: "PoppinsSemiBold",
  },
});

export default LoginForm;
