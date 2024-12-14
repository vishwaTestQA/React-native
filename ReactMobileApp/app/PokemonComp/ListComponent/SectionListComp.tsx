import {
  View, Text, SectionList,
  SafeAreaView, StyleSheet,
  StatusBar,
  Alert
} from 'react-native'
import React from 'react'
import groupedPokemon from "./grouped-pokemon.json"
import groupedPokemon100 from "./grouped100pokemon.json"

export default function SectionListComp() {
  let i = 0;
  return (
    <SafeAreaView style={styles.safe}>
      <SectionList
        sections={groupedPokemon100}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardEach}>
              <Text style={styles.dataEach}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) =>{
          console.log(section.id);
          return(
           <Text
            style={styles.typeText}>
            {section.type}
          </Text>
          )
        }}
          SectionSeparatorComponent={()=> <View style ={{height:10}}></View>}

          ItemSeparatorComponent ={ () => <View style ={{height:10}}></View>}

          initialNumToRender={5}
          onEndReachedThreshold={0.2}
          onEndReached={()=> Alert.alert("end section")}
          horizontal
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    paddingTop: StatusBar.currentHeight,
  },
  cardEach: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  dataEach: {
    fontSize: 20,
  },
  typeText:{
    fontSize:30,
    backgroundColor:"white",
  }
}
)