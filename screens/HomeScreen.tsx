import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";

export default function HomeScreen(){
    return (
        <View style={styles.container}>
            <Text>
                Home!🥸
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'brown',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});