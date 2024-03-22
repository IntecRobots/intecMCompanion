import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import { useColorScheme,StyleSheet, StyleProp } from "react-native";

const style = StyleSheet.create({
    textligth:{
        color:'white'
    },
    textdark:{
        color:'black'
    },
    backgroundLightCard:{
        backgroundColor:'white'
    },
    backgroundDarkCard:{
        backgroundColor:'#242424'
    }
})


const useTheme = () =>{
    const modo = useColorScheme();

    const theme:Theme = (modo === "dark") ? DarkTheme : DefaultTheme;
    const color = (modo === "dark") ? style.textligth: style.textdark;
    const backgroundCard = (modo === "dark") ? style.backgroundDarkCard: style.backgroundLightCard;


    return {theme,color,backgroundCard};
}

export default useTheme;