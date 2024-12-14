import {Text, View, StyleSheet, Button, Pressable, TouchableOpacity, TouchableHighlight} from 'react-native'

import React from 'react'

export const BoxShadow = () => {
  return (
    <View>
    <Button  title='roundedBtn'></Button>

    <Text style={[styles.textDimensions, styles.box, styles.boxShadowIOS, styles.androidShadow]}>
       showdow text
    </Text>
       
    </View>
  )
}

const styles = StyleSheet.create({
  box:{
   padding:10,
   marginVertical:10,
   backgroundColor:"white",
   borderRadius: 6,
  },
  boxShadowIOS:{
    shadowColor: "#333333",
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowOffset: {
      width: 15,
      height:15,
    },
  },
  textDimensions:{
      width:300,
      height:300
    },
    androidShadow:{
      elevation:20,
      shadowColor:"black"
    }}
  )


