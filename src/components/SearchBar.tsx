import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface SearchBarProps<T> {
    dataArray: T[];
    setDataArray: React.Dispatch<React.SetStateAction<T[]>>;
    searchFields: (keyof T)[]; // Campos en los que se realizará la búsqueda
}

const SearchBar = <T,>({ dataArray, setDataArray, searchFields }: SearchBarProps<T>) => {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        filterData();
    }, [searchQuery]);

    const filterData = () => {
        const filteredData = dataArray.filter((item) =>
            searchFields.some((field) =>
                String(item[field]).toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setDataArray(filteredData);
    };

    return (
        <View style={styles.searchSection}>
            <FontAwesome5 name="search" size={20} color="#868A90" style={styles.searchIcon} />
            <TextInput
                style={styles.input}
                onChangeText={setSearchQuery}
                placeholder="Buscar"
                placeholderTextColor="#868A90"
            />
        </View>
    );
};

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

export default SearchBar;
