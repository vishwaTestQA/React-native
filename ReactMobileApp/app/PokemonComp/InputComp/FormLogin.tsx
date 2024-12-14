import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function FormLogin() {
  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Username: </Text>
        <TextInput style={styles.textInput}
         placeholder='enter firstname'
         value = {username}
         onChangeText={setUserName}></TextInput>

        <Text style={styles.label}>Password: </Text>
        <TextInput style={styles.textInput}
        placeholder='enter password'
        value= {password}
        onChangeText={setPassword}
        secureTextEntry>

        </TextInput>
        <View style={styles.buttonLogin}>
        <Button title="Login"></Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    flex:1,
    paddingHorizontal:10,
    backgroundColor: "#f5f5f5",
    justifyContent:"center",
  },
formContainer:{
  paddingTop:10,
   borderWidth:1,
   borderRadius:1,
   shadowOffset:{
    width:0,
    height:2,
   },
   shadowOpacity:0.25,
   shadowRadius: 4,
   shadowColor:"black",
   elevation:1,
  //  alignItems:"center",
},
label:{
  fontSize:20,
  fontWeight:"bold",
  paddingLeft:10,
  marginBottom:10,
},
textInput:{
  borderWidth:1,
  borderRadius:2,
  marginHorizontal:10,
  marginBottom:10,
  padding:3,
},
buttonLogin:{
  marginBottom:10,
  padding:10,
}
})