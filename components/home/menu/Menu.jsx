import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import styles from "./menu.style";

import MenuCard from "../../card/MenuCard";
import useFetch from "../../../hook/useFetch";
import { COLORS } from "../../../constant";

const Menu = () => {

    // fetch data
    const {data, isLoading, error} = useFetch('menu');


    return(
        <View style={styles.container}>
            {/* Makanan Container */}
            <Text style={styles.containerTitle}>Makanan</Text>
            <View style={styles.subContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    {/* <Text>Something went wrong</Text> */}
                ) : (
                    data?.map((item) => (
                        <MenuCard key={item.id} target={'makanan'} type={item.type} nama={item.nama} harga={item.harga} img={`https://rplcoffe.000webhostapp.com/img/${item.img}`}/>
                    ))
                )}
            </View>

            {/* Minuman Container */}
            <Text style={styles.containerTitle}>Minuman</Text>
            <View style={styles.subContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    {/* <Text>Something went wrong</Text> */}
                ) : (
                    data?.map((item) => (
                        <MenuCard key={item.id} target={'minuman'} type={item.type} nama={item.nama} harga={item.harga} img={`https://rplcoffe.000webhostapp.com/img/${item.img}`}/>
                    ))
                )}
            </View>
        </View>
    );
}

export default Menu;