import React from "react";
import { Switch, Text, View, StyleSheet, TouchableOpacity } from "react-native";


interface ThemeOptionProps {
    text: string;
    onPress: () => void;
    isDarkMode: boolean;
    center?:boolean;
    flexDirectionRow?:boolean;
    stylesBoton?: any;
    stylesText?:  any;
  }

  const StyleOptionSetting: React.FC<ThemeOptionProps> = ({ text, onPress, isDarkMode,center,flexDirectionRow, stylesBoton, stylesText }) => {

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
        (isDarkMode) ? styles.textLight :  styles.textDark
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
