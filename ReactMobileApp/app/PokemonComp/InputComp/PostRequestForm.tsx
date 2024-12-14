import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, TextInput, Button, ActivityIndicator, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function PostRequestForm() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (limit = 10) => {
    try {
    setIsLoading(true);  
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const data = await response.json();
    setList(data);
    setIsLoading(false);
    setErrors(null);
  } catch (error) {
      console.log("error");
      setErrors("Error Fetching data");
      setIsLoading(false);
  }
  }

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchData(22);
    setTitle("");
    setBody("");
    setIsRefreshing(false);
  }

  const addPost = async () => {
    setIsPosting(true);
    try {
    const response = await fetch('https://jsonlaceholder.typicode.com/posts', {
      method: "post",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
      title: title,
      body: body
      })
    });
    const newPost = await response.json();
    setList([newPost, ...list]);
    setTitle("");
    setBody("");
    setIsPosting(false);
  } catch (error) {
    console.log("Error posting data");
    setErrors("Error Posting data");
    setIsPosting(false); 
  }
  }

  useEffect(()=> {
    fetchData();
  },[])

  if(isLoading){
    return(
      <SafeAreaView style={{backgroundColor:"lightgrey", flex:1}}>
         <ActivityIndicator size="large" color="0000ff"/>
         <Text style={
          {fontStyle:20, 
          textAlign:"center",
          fontWeight:"bold"}}>Loading...</Text>
      </SafeAreaView>
    )
  }

  return (
     errors ? 
     <ScrollView  contentContainerStyle={styles.errorContainer}
         refreshControl={
          <RefreshControl refreshing={isRefreshing}
                          onRefresh={handleRefresh}/>
         }
     >
     <Text style={styles.errorMessage}>{errors}</Text>
     </ScrollView>
     :
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.formContainer}>
        <Text>Title:</Text>
        <TextInput style={styles.textbox}
           value={title}
           placeholder='enter title'
           onChangeText={setTitle}
        ></TextInput>

       <Text>Body:</Text>
        <TextInput style={styles.textbox}
           value={body}
           placeholder='enter body'
           onChangeText={setBody}
        ></TextInput>
     
        <Button title= 
           {isPosting ? "Adding..." : "Add a post"} 
           onPress={addPost}
           disabled={isPosting}></Button>
      </View>
        <FlatList
            data={list}
            renderItem={({item,index})=> {
              return(
                <View style={styles.cards}>
                  <Text>{index+1}</Text>
                  <Text>{item.title}</Text>
                  <Text>{item.body}</Text>
                </View>
              )
            }
            } 
            ListHeaderComponent={()=> <Text 
              style={{fontSize:20, textAlign:"center"}
            }>User list</Text>}
            ListFooterComponent={()=> <Text 
              style={{fontSize:20, textAlign:"center"}}
            >End list</Text>} 
            refreshing={isRefreshing}
            onRefresh={handleRefresh}  
         >
             </FlatList>
    </SafeAreaView>
  )
}

const styles =  StyleSheet.create({
  outerContainer:{
    flex:1,
    backgroundColor:"#f5f5f5",
    paddingHorizontal:10,
    paddingTop:StatusBar.currentHeight
  },
  cards:{
   flex:1,
   borderWidth:1,
   borderRadius:4,
   padding:8,
   marginBottom:10,
  },
  formContainer:{
    borderWidth:1,
    borderRadius:4,
    backgroundColor:"white",
    padding:10,
  },
  textbox:{
    borderWidth:1,
    borderRadius:3,
    marginBottom:10,
  },

  errorContainer:{
    flex:1,
    backgroundColor:"grey",
    paddingTop: StatusBar.currentHeight,
  },
  errorMessage:{
    fontSize:20,
  }
})