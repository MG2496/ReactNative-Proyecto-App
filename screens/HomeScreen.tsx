import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import {Platform, Dimensions} from 'react-native'

export default function HomeScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Home!🥸
            </Text>
            {/* <Text style = {styles.textShow}> El ancho de la pantalla es: {Dimensions.get ('window').width}</Text>
            <Text style = {styles.textShow}> La altura de la pantalla es: {Dimensions.get ('window').height}</Text>
            <Text style = {styles.textShow}> La resolución de la pantalla actual: {Dimensions.get ('window').scale}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
        
    },

    text:{
        color: "brown",
        fontSize: 30,
        justifyContent: 'center',
        backgroundColor: '#d8d2cc',
    
    },
// dimensiones
    // textShow: {
    //     marginLeft:15,
    //     marginRight:15,
    //     marginTop:40,
    //     textAlign:'center',
    //     color:'#187ae6',
    //     fontSize:20,
    //     fontWeight:'bold',
    // },


    
});
