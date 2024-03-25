import React from "react";
import { Switch, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import useTheme from "../hooks/useTheme";


interface ThemeOptionProps {
    text: string;
    onPress: () => void;
    center?:boolean;
    flexDirectionRow?:boolean;
    stylesBoton?: any;
    stylesText?:  any;
  }

  const StyleOptionSetting: React.FC<ThemeOptionProps> = ({ text, onPress,center,flexDirectionRow, stylesBoton, stylesText }) => {
    const {color} =useTheme();
    if(stylesBoton&&!(typeof stylesBoton.create ===  'function')) stylesBoton == undefined;
    if(stylesText&&!(typeof stylesText.create ===  'function')) stylesText == undefined;

    const styleOptionBoton = [
        styles.option,
        flexDirectionRow && {flexDirection: "row"},
        stylesBoton
    ]; 

    const styleTextBoton = [
        styles.optionText, 
        center && { textAlign: 'center' },
        stylesText,
        color,
    ];

    return (
        <TouchableOpacity style={styleOptionBoton} onPress={onPress}>
            <Text style={styleTextBoton}>{text}</Text>
        </TouchableOpacity>
    );
};




const styles = StyleSheet.create({
    textLight:{
        color: "white"
    },
    textDark:{
        color:'#333'
    },
    optionText: {
        fontSize: 15,
        fontFamily: "Poppins",
        textAlign:'center'
      },
      option: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#292929",
        fontFamily: "Poppins",
        justifyContent: "space-between",
        alignItems: "center",
      },
});

export default StyleOptionSetting;
