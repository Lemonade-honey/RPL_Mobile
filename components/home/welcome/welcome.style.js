import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constant";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    welcomeMassage:{
        fontWeight: 'bold',
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginTop: 2
    },
    userName: {
        fontWeight: 'bold',
        fontSize: SIZES.medium,
        color: COLORS.secondary
    }
})

export default styles;