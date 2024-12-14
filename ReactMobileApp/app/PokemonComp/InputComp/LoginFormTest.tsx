import { View, Text ,StyleSheet , 
    Button, TextInput, StatusBar,
    SafeAreaView, Platform} from 'react-native'
import React, { useState } from 'react'

export default function LoginFormTest() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput style={styles.textBox}
                  value={username}
                  onChangeText={setUsername}
                  placeholder='enter username'
                  ></TextInput>
        <Text style={styles.label}>Password:</Text>
        <TextInput style={styles.textBox}
                  value={password}
                  onChangeText={setPassword}
                  placeholder='enter username'
                  ></TextInput>
          <Button title="Login"></Button>        
      </View>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  outerContainer:{
    backgroundColor:"lightgrey",
    flex:1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent:"center",
    paddingHorizontal:15,
  },
  innerContainer:{
    // flex:1,
    borderWidth:1,
    borderRadius:10,
    backgroundColor:"white",
    padding:12,
    ...Platform.select({
      android:{elevation:10},
      ios:{
        shadowOffset:{width:0, height:2},
        shadowColor:"grey",
        shadowRadius:5,
      }
    })
  },
  label:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:6,
  },
  textBox:{
    borderWidth:1,
    borderRadius:6,
    marginBottom:15,
    // elevation:10,
  },
  loginButton:{},
})