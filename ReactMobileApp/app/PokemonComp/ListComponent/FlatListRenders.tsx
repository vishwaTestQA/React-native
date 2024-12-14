import { View, Text, StyleSheet, 
  SafeAreaView, StatusBar, 
  ScrollView, FlatList, 
  Alert} from 'react-native'
import React from 'react'
import pokemon from "./data.json"

export default function FlatListRenders() { 
   return(
    <SafeAreaView style={styles.safeAreaContainer}>
      <FlatList style={styles.scroll}
         data={pokemon}
         renderItem={({item}) => {
          console.log(item.id); 
          return(
            <View style={styles.card} key={item.id}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.id}>{item.id}</Text>
            </View>
          )
         }}
        // horizontal = {true}
        // showsVerticalScrollIndicator={true}
        keyExtractor={(item,index)=> item.id.toString()}
        initialNumToRender={90}
        onEndReached={()=>{Alert.alert('reached end')}}
        onEndReachedThreshold={0.5}
        // onEndReached={<Text>end</Text>}
         >
      </FlatList>
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
    //  alignItems:"center",
    //  justifyContent:"center",
     borderWidth:2,
     borderRadius:20,
     marginBottom:18,
  },
  name:{
   fontSize:30,
  },
  id:{
   fontSize:20,
  }
})