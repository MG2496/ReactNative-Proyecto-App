import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";

export default function TypeScreen(){
    return (
        <View style={styles.container}>
            <Text>
                Type!🥸
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});