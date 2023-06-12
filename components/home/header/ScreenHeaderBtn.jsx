import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ScreenHeaderBtn = ({ handlePress }) => {
    return(
        <TouchableOpacity onPress={handlePress}>
            <Text>Anjass</Text>
        </TouchableOpacity>
    );
}

export default ScreenHeaderBtn;