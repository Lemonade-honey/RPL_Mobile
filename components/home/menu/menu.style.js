import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constant";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: SIZES.xLarge
    },
    subContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        // flex: 1,
        // alignItems: "flex-start",
        // flexWrap: "wrap"
    },
    containerTitle:{
        fontSize: SIZES.large,
        color: COLORS.primary,
        marginBottom: SIZES.medium
    }
})

export default styles;