import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Entypo } from '@expo/vector-icons';

const ScreenHeaderBtn = ({ icon, handlePress }) => {
    return(
        <TouchableOpacity onPress={handlePress}>
            <Entypo name={icon} size={20} color="black" />
        </TouchableOpacity>
    );
}

export default ScreenHeaderBtn;