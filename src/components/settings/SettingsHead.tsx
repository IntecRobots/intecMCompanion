import React from "react";
import StyleOptionSetting from "../StyleOptionSetting";
import { View } from "react-native";


interface ActiveMode{
    mode:boolean;
}

const SettingsHead:React.FC<ActiveMode> = ({mode}) =>{
    return (
        <>
            <StyleOptionSetting
                text="Opciones app"
                onPress={() => console.log("Prueba")}
                isDarkMode={mode}
                flexDirectionRow
            />
            <StyleOptionSetting
                text="Opciones robot"
                onPress={() => console.log("Prueba")}
                isDarkMode={mode}
                flexDirectionRow
            />
            
        </>
    );
}

export default SettingsHead;
