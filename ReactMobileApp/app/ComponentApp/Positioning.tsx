import {ScrollView, View, TextStyle, StyleProp,ViewStyle, StyleSheet} from 'react-native'
import { Box } from './Box';

interface MyComponentProps {
  children: string,
  style: StyleProp<ViewStyle | TextStyle>;
}

export const Positioning = ()=>{
  return (
    <View style={[styles.FlexContainer]}>
     {/* <ScrollView> */}
     <Box style={{backgroundColor:"orange", top:75, left:75}}>Box1</Box>
     <Box style={{backgroundColor:"white"}}>Box2</Box>
     <Box style={{backgroundColor:"blue"}}>Box3</Box>
     <Box style={{backgroundColor:"white", position:"absolute",top:75, left:75}}>Box4</Box>
     <Box style={{backgroundColor:"green"}}>Box5</Box>
     {/* {/* <Box style={{backgroundColor:"orange"}}>Box1</Box> */}
     {/* <Box style={{backgroundColor:"white"}}>Box2</Box> */} 
     {/* <Box style={{backgroundColor:"blue"}}>Box3</Box>
     <Box style={{backgroundColor:"white"}}>Box4</Box>
     <Box style={{backgroundColor:"green"}}>Box5</Box>     <Box style={{backgroundColor:"orange"}}>Box1</Box> */}
     {/* <Box style={{backgroundColor:"white"}}>Box2</Box>
     <Box style={{backgroundColor:"blue"}}>Box3</Box>
     <Box style={{backgroundColor:"white"}}>Box4</Box>
     <Box style={{backgroundColor:"green"}}>Box5</Box> */}
    </View>
  )
}

const styles = StyleSheet.create({
  FlexContainer: {
    padding:30,
    // height:450,
    // flex:1,
    backgroundColor:"red",
    // flexDirection: "row",
    // flexWrap:"wrap",
    // alignItems: "center",
    justifyContent:"space-around"
  },

})

