import { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";

// import style
import { COLORS, SIZES } from "../constant";
import { Welcome, ScreenHeaderBtn } from "../components";

const Home = () => {

    // define router
    const router = useRouter();

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            {/* Header Nav */}
            <Stack.Screen 
                options={{
                    headerTitle: "Cafe In Aja",
                    headerTitleAlign: 'left',
                    headerRight: () => (
                        <ScreenHeaderBtn icon={"clipboard"}/>
                    )
                }}
            />

            {/* BODY */}
            <ScrollView>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome />
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

export default Home;