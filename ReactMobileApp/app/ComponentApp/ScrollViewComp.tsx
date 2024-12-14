import React from 'react'
import { View, Image, Text, ScrollView, Pressable } from 'react-native'

export const ScrollViewComp = () => {
  return (
    <View>
    <ScrollView style={{padding:30}}>
      <Pressable onLongPress={()=> console.log("long press")}
        delayLongPress={500}>
      <Image source={{uri:"https://picsum.photos/200/300?grayscale"}} style={{width:300, height:300}}></Image>
      </Pressable>
      <Pressable onPress={()=>console.log("press")}>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus in illo voluptatem culpa alias dolorem odit expedita quidem cupiditate hic reprehenderit, deserunt, consequuntur fugiat. Accusamus, veniam nemo! Deserunt, iusto? Laborum?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptatibus necessitatibus odio, eaque veniam doloribus dolore, at suscipit, laudantium vel est? Quis facilis totam minima quisquam laboriosam modi omnis atque!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quas dolorem cupiditate iusto aliquam aperiam et fugit id fuga aut, laboriosam totam eaque est. Libero quos accusamus nulla veritatis aliquam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptatum aperiam impedit voluptates autem possimus qui ratione quod sapiente enim facilis 
      </Text>
      </Pressable>

      <Pressable onPressIn={()=>console.log("onpress in") }>
      <Image source={{uri:"https://picsum.photos/200/300?grayscale"}} style={{width:300, height:300}}></Image>
      </Pressable>
    </ScrollView>
    </View>
  )
}
