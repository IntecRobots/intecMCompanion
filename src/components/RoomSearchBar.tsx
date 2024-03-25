import React, { useState,Dispatch,SetStateAction, useEffect} from "react";
import { View,TextInput,StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import useTheme from "../hooks/useTheme";

interface SearchRoomsProps {
    rooms:any;
    setRooms: SetStateAction<any>;

}

const SearchRooms:React.FC<SearchRoomsProps> = ({rooms,setRooms}) =>{

  const [searchQuery, setSearchQuery] = useState("");
  const {color,backgroundSearchRoom} =useTheme();

  useEffect(() => {
    filterRooms();
  }, [searchQuery, rooms]);

  const filterRooms = () => {
    const filtered = rooms.filter((room: any) => 
      room.sala.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setRooms(filtered);
  };
    

    return(
        <View style={[backgroundSearchRoom,styles.searchSection]}>
            <FontAwesome5 name="search" size={20} color="#868A90" style={styles.searchIcon} />
            <TextInput style={[color,styles.input]} onChangeText={text => setSearchQuery(text)}   placeholder="Buscar" placeholderTextColor="#868A90" />
        </View>
    );
}


const styles = StyleSheet.create({
    searchSection: {
        flexDirection: "row",
        alignItems: "center",
        fontSize: 16,
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 16,
        marginHorizontal: 16,
        marginBottom: 20,
        fontFamily: "Poppins",
      },
      searchIcon: {
        padding: 10,
      },
      input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        fontSize: 16,
      },
});




export default SearchRooms;
