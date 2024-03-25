import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import { useColorScheme,StyleSheet, StyleProp } from "react-native";

const style = StyleSheet.create({
    textligth:{
        color:'white'
    },
    textdark:{
        color:'black'
    },
    backgroundDark:{
        backgroundColor:'black'
    },
    backgroundLight:{
        backgroundColor:'white'
    }
    ,
    backgroundLightCard:{
        backgroundColor:'white'
    },
    backgroundDarkCard:{
        backgroundColor:'#242424'
    },
    notifierDarkTextParagraph:{
        color:'#bdbdbd'
    },
    notifierLightTextParagraph:{
        color:'black'
    },
    borderColorDarkNotifier:{
        borderColor:'#292929'
    },
    borderColorLightNotifier:{
        borderColor:'white'
    },
    backgroundColorSearchRoomsDark:{
        backgroundColor:'#141518'
    },
    backgroundColorSearchRoomsLight:{
        backgroundColor:'#F5EAE8'
    },
    backgroundColorCardRoomDark:{
        backgroundColor:'#3673F5'
    },
    backgroundColorCardRoomLight:{
        backgroundColor:'#F5EAE8'
    }
})


const useTheme = () =>{
    const modo = useColorScheme();

    const theme:Theme = (modo === "dark") ? DarkTheme : DefaultTheme;

    //home and General
    const color = (modo === "dark") ? style.textligth: style.textdark;

    //background General
    const background = (modo === "dark") ? 
    style.backgroundDark: style.backgroundLight;

    //Background Card
    const backgroundCard = (modo === "dark") ? style.backgroundDarkCard: style.backgroundLightCard;
    //notifications
    const bodyColorTextNotifier = (modo === "dark")?
    style.notifierDarkTextParagraph:style.notifierLightTextParagraph;

    const borderColorNotifier= (modo==="dark")?
    style.borderColorDarkNotifier:style.borderColorLightNotifier;
    
    //Search bar Room

    const backgroundSearchRoom = (modo==="dark")?
    style.backgroundColorSearchRoomsDark:style.backgroundColorSearchRoomsLight;

    //Card Room
    const backgroundCardRoom=(modo==="dark")?
    style.backgroundColorCardRoomDark:style.backgroundColorCardRoomLight;

    return {
        theme,
        color,
        background,
        backgroundCard,
        bodyColorTextNotifier,
        borderColorNotifier,
        backgroundSearchRoom,
        backgroundCardRoom
    };
}

export default useTheme;