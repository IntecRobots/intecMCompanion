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
import HeadLoginForm from "./HeadLoginForm";
import BodyForm from "./BodyForm";

const LoginForm = () => {

  return (
    <View testID="login-form" style={styles.container}>
      <HeadLoginForm/>
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
