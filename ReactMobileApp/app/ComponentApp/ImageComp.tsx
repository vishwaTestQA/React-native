import { View, Text, Image, ImageBackground } from "react-native";
// import logo from "../ComponentApp/../(tabs)/../../assets/images/icon.png"
const logo = require('../ComponentApp/../(tabs)/../../assets/images/icon.png');

export default function ImageComp(){
  
  return <View>
    {/* <Image source={logo} style={{width:300, height:300}}/>
    <Image source={{uri:"https://picsum.photos/200/300?grayscale"}} style={{width:300, height:300}}/> */}
    <ImageBackground source={{uri:"https://picsum.photos/200/300?grayscale"}}>
      <Text style={{padding:80}}>Background</Text>
    </ImageBackground>
    <Text>Hellow front text</Text>
  </View>
 
}