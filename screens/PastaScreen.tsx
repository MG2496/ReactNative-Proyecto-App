import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import { getAuth, signOut } from 'firebase/auth';





export default function PastaScreen() {

  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Text style={styles.label1}>Cream Cheese Pasta 🧀</Text>
      <Text style={styles.breakline}></Text>
      <Text style={styles.label2}>Ingredientes 📋</Text>
        <FlatList
          data={[
            { key: '➣ 400g de espagueti' },
            { key: '➣ 2 huevos' },
            { key: '➣ 150g de queso cuadrado' },
            { key: '➣ 120g de bacon o panceta' },
            { key: '➣ Sal y pimienta' },
            { key: '➣ Un pequeño chorrito de aceite de oliva' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      <Text style={styles.label3}>Preparación 🧑🏻‍🍳</Text>
      <Text style={styles.breakline}></Text>
        <FlatList
          data={[
            { key: '➣ Ponemos a cocer abundante agua en una olla grande. Cuando llegue a ebullición, echamos un buen puñadito de sal, para que los espagueti queden después bien sabrosos, Los introducimos y los removemos muy de vez en cuando. Sobre todo al principio de la cocción, para que no se peguen en fondo de la olla' },
            { key: '➣ Una vez estén «al dente», al cabo de unos 10 minutos, escurrimos los espagueti del agua, habiendo reservado un par de cucharones del caldo de la cocción.' },
            { key: '➣ Preparamos la salsa de queso. En una sartén grande ponemos a calentar a fuego fuerte un chorrito de aceite. Después añadimos los ajos, bien picados, y dejamos cocinar hasta que se doren' },
            { key: '➣ Añadimos la nata y el queso y dejamos cocinar durante un par de minutos más, a fuego más moderado. Removemos con una cuchara de palo constantemente' },
            { key: '➣ Después añadimos aquí los espagueti, el caldo de la cocción, un puñadito de perejil picado y removemos nuevamente, dejando cocinar a fuego suave durante un par de minutos más. Que los espagueti se impregnen y absorban bien el sabor de la salsa' },
            { key: '➣ Finalmente, espolvoreamos con bien de pimienta negra recién molida. ¡La mejor especia del mundo entero!' },
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