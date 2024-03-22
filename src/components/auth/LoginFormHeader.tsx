import React, { useState } from "react";
import { View,Text,Image,StyleSheet} from "react-native";

const LoginFormHeader = () =>{
    return(
        <View style={styles.curveShape}>
            <Image
            source={require("../../../assets/images/intecrobots_dark.png")}
            style={styles.logo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        alignSelf: "center",
        position: "absolute",
        top: 70,
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
});

export default LoginFormHeader;