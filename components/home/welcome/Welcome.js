import React from "react";
import { View, Text } from "react-native";

import styles from "./welcome.style";

const Welcome = () => {
    
    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello Daffa</Text>
                <Text style={styles.welcomeMassage}>Ayo pilih makananmu</Text>
            </View>
        </View>
    );
}

export default Welcome;