import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";


const MenuCard = ({target, type, nama, img, harga, handleNavigate}) => {
    if(target == type){
        return(
            <TouchableOpacity style={styles.container} onPress={handleNavigate}>
                <Image source={{uri: img}} style={{flex: 1,width: null, height: null, borderTopRightRadius: 10, borderTopLeftRadius: 10}} resizeMode="center"/>
                <View style={styles.subContainer}>
                    <Text>{nama}</Text>
                    <Text>Rp. {harga}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 150,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#8a8a8a',
        borderRadius: 10,
    },
    subContainer: {
        paddingLeft: 5
    }
})

export default MenuCard