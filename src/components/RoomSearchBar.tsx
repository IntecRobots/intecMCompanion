import React, { useState,Dispatch,SetStateAction, useEffect} from "react";
import { View,TextInput,StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface SearchRoomsProps {
    rooms:any;
    setRooms: SetStateAction<any>;

}

const SearchRooms:React.FC<SearchRoomsProps> = ({rooms,setRooms}) =>{

  const [searchQuery, setSearchQuery] = useState("");

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
        <View style={styles.searchSection}>
            <FontAwesome5 name="search" size={20} color="#868A90" style={styles.searchIcon} />
            <TextInput style={styles.input} onChangeText={text => setSearchQuery(text)}   placeholder="Buscar" placeholderTextColor="#868A90" />
        </View>
    );
}


const styles = StyleSheet.create({
    searchSection: {
        flexDirection: "row",
        alignItems: "center",
        fontSize: 16,
        backgroundColor: "#141518",
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
        color: "white",
        fontSize: 16,
      },
});




export default SearchRooms;
