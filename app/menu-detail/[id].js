import { Stack, useRouter, useSearchParams } from "expo-router";
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";

import useFetch from "../../hook/useFetch";
import { COLORS } from "../../constant";

const MenuDetail = () => {
    const router = useRouter();
    const params = useSearchParams();

    const {data, isLoading, error, reFetch} = useFetch("menu", params.id);

    return (
        <SafeAreaView>
            <Stack.Screen 
                options={{
                    headerTitle: "Menu Details"
                }}
            />
            <ScrollView>
                {isLoading ? (
                    <ActivityIndicator size={"large"} color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <Text>Nama : {data.nama}</Text>
                    // buat card
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

export default MenuDetail;