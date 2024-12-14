import { View, Text,SafeAreaView, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

export default function TextInputComp() {
  const [name, setName] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () =>{
      setIsPressed(true);
  }
  return (
    <SafeAreaView style={{paddingTop:25}}>
      <TextInput style={styles.textInput}
                 value={name}
                  onChangeText={setName}/>
                  {/* <Text>{name}</Text>  */}
      {isPressed && <Text>{name}</Text>}  
      <Button title={"button"} onPress = {handlePress}></Button>         
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textInput:{
    borderWidth:1,
    padding:10,
    margin:10,
  }
})