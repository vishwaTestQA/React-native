import {Text, View, StyleSheet, Button, Pressable, TouchableOpacity, TouchableHighlight} from 'react-native'

import React from 'react'

export const StyleSheetAndBoxModal = () => {
  return (
    <View>
    <Button  title='roundedBtn'></Button>
    <Pressable style={styles.pressableBtn}>
      <Text>RoundedPressable</Text>
    </Pressable>
    <TouchableOpacity style={styles.pressableBtn}>
      <Text>RoundedPressable</Text>
    </TouchableOpacity>

    <TouchableHighlight onPress={()=>console.log("highligt")} style={styles.pressableBtn}>
      <Text>RoundedPressable</Text>
    </TouchableHighlight>

    <Text style={[styles.textDimensions, styles.box, styles.boxShadow]}>
       showdow text
    </Text>
       
    </View>
  )
}

const styles = StyleSheet.create({
  pressableBtn: {
    backgroundColor: "lightgreen",
    borderRadius:5,
    marginVertical:10,
    width:"100%",
    height:"20%",
  },

  box:{
   padding:10,
   marginVertical:10,
   backgroundColor:"milkywhite",
   borderRadius: 6,
  },
  boxShadow:{
    shadowColor: "blue",
    shadowOpacity: 0.6,
    shadowRadius: 4,
    shadowOffset: {
      width: 5,
      height:5,
    },
  },
  textDimensions:{
      width:300,
      height:300
    }}
  )


