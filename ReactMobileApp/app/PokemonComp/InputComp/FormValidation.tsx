import { View, Text ,StyleSheet , 
  Button, TextInput, StatusBar,
  SafeAreaView, Platform, 
  Image, KeyboardAvoidingView,Keyboard,
  TouchableWithoutFeedback, ScrollView} from 'react-native'
import React, { useState } from 'react'

export default function FormValidation() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState({});

const validateForm =()=> {
  const errors1={}
  if(!username) errors1.username = "username is required";
  if(!password) errors1.password = "password is required";

  setErrors(errors1);

  return Object.keys(errors1).length === 0
}

const handleSubmit =()=>{
  if(validateForm()){
     console.log("submitteed ")
     setUsername(""),
     setPassword(""),
     setErrors("")
  }
}

// {Platform.OS === 'ios' ? 'padding' : 'height'} 
// Platform.OS === 'ios' ? 100 : 0
return (
  <KeyboardAvoidingView 
  behavior='padding'
  keyboardVerticalOffset={100}
  >
     <ScrollView contentContainerStyle={styles.contentContainerStyle}>  
    {/* <TouchableWithoutFeedback 
    onPress={Keyboard.dismiss} accessible={true}> */}
    <View style={styles.innerContainer}>
      <Image source={require('../../../assets/images/adaptive-icon.png')}
        style={styles.image}></Image>
      <Text style={styles.label}>Username:</Text>
      <TextInput style={styles.textBox}
                value={username}
                onChangeText={setUsername}
                placeholder='enter username'
                autoFocus={true}
                ></TextInput>
      {errors.username ? <Text>{errors.username}</Text> : null}
      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>
                {errors.password ? <Text>{errors.password}</Text> : null}

                <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>
  <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>
 <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>

<Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>

<Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>

<Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>

<Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>

<Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>

<Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>

<Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>

<Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>

<Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>

<Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>

<Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput>
                 <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.textBox}
                value={password}
                onChangeText={setPassword}
                placeholder='enter username'
                secureTextEntry
                ></TextInput> <Text style={styles.label}>Password:</Text>
                <TextInput style={styles.textBox}
                          value={password}
                          onChangeText={setPassword}
                          placeholder='enter username'
                          secureTextEntry
                          ></TextInput>

        <Button title="Login" onPress={handleSubmit}></Button>        
    </View>
     {/* </TouchableWithoutFeedback> */}
     </ScrollView>  
  </KeyboardAvoidingView>
)
}

const styles= StyleSheet.create({
  contentContainerStyle:{
  backgroundColor:"lightgrey",
  flexGrow:1,
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  justifyContent:"center",
  // alignItems:"center",
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
  // boxShadow: 
  // elevation:10,
},
loginButton:{},
image:{
  width:200,
  height:200,
}
})