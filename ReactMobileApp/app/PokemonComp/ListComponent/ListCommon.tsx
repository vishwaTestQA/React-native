import { View, Text, StyleSheet, 
  SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import pokemon from "./data.json"

export default function ListCommon() { 
   return(
    <SafeAreaView style={styles.safeAreaContainer}>
    <ScrollView style={styles.scroll}>{
      pokemon.map( item => {
        console.log(item.id);
       return(
        <View style={styles.card} key={item.id}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.id}>{item.id}</Text>
        </View>
       )
      })
      }
    </ScrollView>
    </SafeAreaView>
   )
}
const styles = StyleSheet.create({
  safeAreaContainer: {
    paddingTop: StatusBar.currentHeight,
  },
  scroll:{
     padding:10,
  },
  card:{
     alignItems:"center",
     borderWidth:2,
     borderRadius:20,
     marginBottom:15,
  },
  name:{
   fontSize:20,
  },
  id:{
   fontSize:15,
  }
})