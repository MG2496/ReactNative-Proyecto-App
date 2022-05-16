import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import { getAuth, signOut } from 'firebase/auth';





export default function SaladScreen() {

  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Text style={styles.label1}>Tacos al pastor 🌮</Text>
      <Text style={styles.breakline}></Text>
      <Text style={styles.label2}>Ingredientes 📋</Text>
        <FlatList
          data={[
            { key: '➣ Carne de cerdo 1/2 k' },
            { key: '➣ Cebolla 1/4 Unidad' },
            { key: '➣ Cilantro Cantidad necesaria' },
            { key: '➣ Chiles guajillo 2 Unidades' },
            { key: '➣ Chiles pasilla 2 Unidades' },
            { key: '➣ Tomates 4 Unidades' },
            { key: '➣ Ajo 1 Diente' },
            { key: '➣ Piña Cantidad necesaria' },
            { key: '➣ Achiote 50g' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      <Text style={styles.label3}>Preparación 🧑🏻‍🍳</Text>
      <Text style={styles.breakline}></Text>
        <FlatList
          data={[
            { key: '➣ Preparamos el adobo. Para ello, hervimos los jitomates durante 5 minutos. Licuamos con chiles pasilla y guajillo desvenados, achiote y un trozo de cebolla.' },
            { key: '➣ Tomamos la carne de cerdo cortado en fetas y dejamos marinando con el adobo durante 3 horas en frío. Sofreímos en una sartén con aceite. Cortamos la carne. Armamos los tacos con tortillas pasadas por agua para recuperar la humedad. Por último, agregamos la piña, el cilantro y la cebolla cortada.  ' },
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