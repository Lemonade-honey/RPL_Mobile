import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./menu.style";

import MenuCard from "../../card/MenuCard";

const Menu = ({ handlePress }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.containerTitle}>Makanan</Text>
            <View style={styles.subContainer}>
                <MenuCard />
            </View>
        </View>
    );
}

export default Menu;