import {View, Text, TextStyle, StyleProp,ViewStyle, StyleSheet} from 'react-native'
import { Box } from './Box';

export const JustifyContent = () => {
  return (
    <View style={[styles.container]}>
     <Box style={{backgroundColor:"orange"}}>Box1</Box>
     <Box style={{backgroundColor:"white"}}>Box2</Box>
     <Box style={{backgroundColor:"blue"}}>Box3</Box>
     <Box style={{backgroundColor:"white"}}>Box4</Box>
     <Box style={{backgroundColor:"green"}}>Box5</Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    // margin:10,
    flex:1,
    
    // justifyContent: "flex-end"
     justifyContent: "center",
     alignItems:"center"
  },

})


