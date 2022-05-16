import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import { getAuth, signOut } from 'firebase/auth';





export default function SushiScreen() {

  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Text style={styles.label1}>California roll 🍣</Text>
      <Text style={styles.breakline}></Text>
      <Text style={styles.label2}>Ingredientes 📋</Text>
        <FlatList
          data={[
            { key: '➣ Alga nori' },
            { key: '➣ Arroz para sushi' },
            { key: '➣ 1 pepino' },
            { key: '➣ 1/2 aguacate' },
            { key: '➣ Salmón semi-ahumado' },
            { key: '➣ Bacalao marinado' },
            { key: '➣ Chutney de mango' },
            { key: '➣ 50 g kikos picados' },
            { key: '➣ 1/2 rulo de cabra' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      <Text style={styles.label3}>Preparación 🧑🏻‍🍳</Text>
      <Text style={styles.breakline}></Text>
        <FlatList
          data={[
            { key: '➣ Ponga el arroz en un bol y cúbralo con agua fría. Revuelva el arroz en el agua, vierta el agua y repita 2-3 veces o hasta que el agua salga clara.' },
            { key: '➣ Mezcle el vinagre de arroz con el azúcar y la sal en un tazón pequeño y caliente la mezcla en el microondas durante 30 segundos' },
            { key: '➣ Corte el aguacate por la mitad. Quítele el hueso. Pele cada mitad y corte el aguacate en tiras finas de 3 mm.' },
            { key: '➣ Tome una bola de arroz y espárzala sobre el nori' },
            { key: '➣ Voltee el nori de manera que el arroz quede en contacto con la envoltura de plástico' },
            { key: '➣ Corte el maki en 8 piezas iguales' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
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
  
  label1: {
    fontSize: 35,
    color: '#97938f',
    textAlign: 'center',
    fontWeight: "bold",
  },
  
  label2: {
    color: '#ff6d00',
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    padding: 20,
    fontSize: 18,
    minHeight: 44,
    textAlign : "justify",
  },
  breakline:{
    padding: 30,
    fontSize: 18,
    height: 44,
  },
  label3:{
    color: '#ff6d00',
    fontSize: 20,
    fontWeight: "bold",
    padding:10,
  }
});