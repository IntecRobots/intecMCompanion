import React from "react";
import { View, Text,StyleSheet} from "react-native";


const message = (error:any) =>{
    return (
        <Text style={styles.textColor}>
            {(error&&error.length>0)? error:""}
        </Text>
    );
}
interface PropsErrorMessage {
    emptyInput?: string|null;
    error?: string|null;
}


const MessageErrorAuth:React.FC<PropsErrorMessage> = ({emptyInput,error}) => {
    if(emptyInput|| error){
        return (
            <View style={styles.container}>
              
                 {(emptyInput&&emptyInput.length>0)? message(emptyInput):message("")}

                 {error&& message(error)}
              
            </View>  
        );
    }
    else{
        return <></>
    }
};

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        backgroundColor:'red',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'red',
        fontFamily: "PoppinsSemiBold",
        alignItems: "center",
    },
    textColor:{
        padding:2,
        color:'white',
        backgroundColor:'red',
        fontWeight:'bold'
    }
});

export default MessageErrorAuth;