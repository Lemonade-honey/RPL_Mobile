import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";


const MenuCard = () => {
    return(
        <TouchableOpacity style={styles.container}>
            <Image resizeMode="center"/>
            <Text>menu</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 150,
        marginBottom: 30
    }
})

export default MenuCard