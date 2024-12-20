import { View, Text, FlatList, Dimensions,StyleSheet, Image, Pressable } from 'react-native'
import { useEffect, useRef, useState } from 'react'

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
// import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';

// library.add(faCaretLeft, faCaretRight)


const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MainImageComponent() {

  const mainImages = [
    require('./Images-e/main/mainImage.jpg'),
    require('./Images-e/main/mainImage2.jpg'),
    require('./Images-e/main/mainImage3.jpg'),
    require('./Images-e/main/mainImage4.jpg'),
    require('./Images-e/main/mainImage5.jpg')
  ]

  const mainImageRef = useRef(null);
  const [index, setIndex] = useState(0);

  const [isDisabledLeft, setIsDisabledLeft] = useState(false);
  const [isDisabledRight, setIsDisabledRight] = useState(true);
  
  const slideBack = ()=>{
     if(mainImageRef.current){
      mainImageRef.current.scrollToIndex({index: index === 0 ? mainImages.length-1 : index-1,  animated: false})
     }}

     const slideNext = ()=>{
      if(mainImageRef.current){
       mainImageRef.current.scrollToIndex({index: index === mainImages.length-1 ? 0 : index + 1, animated: false})
      }}


      // const [visibleItems, setVisibleItems] = useState([]);

      // const onViewableItemsChanged = ({ viewableItems, changed }) => {
      //   console.log('Currently visible items:', viewableItems);
      //   console.log('Items that just changed visibility:', changed);
      //   setVisibleItems(viewableItems);  // Update visible items state
      // };

      // const viewabilityConfig = {
      //   itemVisiblePercentThreshold: 50,  // Threshold to trigger visibility
      // };

      const handleScrollEnd = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.floor(contentOffsetX / SCREEN_WIDTH);
    
        // Loop to first image if at the end
        if (index === mainImages.length) {
          if(mainImageRef.current){
          mainImageRef.current.scrollToIndex({ index: 0, animated: false });
          setIndex(0);
          }
        } else {
          setIndex(index);
        }
      };

      useEffect(()=>{
        setTimeout(()=>{

        })
      })

  return (
    <View>
        <FlatList
          ref={mainImageRef}
          horizontal
          // onViewableItemsChanged={onViewableItemsChanged}  
          // viewabilityConfig={viewabilityConfig} 
          showsHorizontalScrollIndicator={false}
          snapToInterval={SCREEN_WIDTH}
          snapToAlignment='center'
          onScrollEndDrag={handleScrollEnd}

          onScroll={(img)=>{
            const offset = img.nativeEvent.contentOffset.x / SCREEN_WIDTH;
            // const deciml = offset - Math.floor(offset);
            // console.log(offset, "hi", deciml);
            // if(offset===0 && deciml===0){
            //   setIndex(mainImages.length);
            // }
            // else if(Math.floor(offset)!==0 && deciml === 0){
            //   setIndex(0);
            // }else{
            //   setIndex(Math.ceil(offset));
            // }
            setIndex(Math.ceil(offset));
            if(Math.ceil(offset)>=1) setIsDisabledLeft(true);
            if(Math.ceil(offset) === mainImages.length-1)  setIsDisabledRight(false);
          }}
          scrollEventThrottle={0}
          pagingEnabled
          data={mainImages}
          renderItem={({ item }) => {
            return (
              <View style={styles.mainImageSection}>
                <Image source={item} style={styles.mainImage} />
              </View>
            )
          }}
        />
        {
         isDisabledLeft && <Pressable style={styles.naviagtionButtonLeft}
                onPress={slideBack}>
                 <FontAwesome name='caret-left' size={30}/>
                </Pressable>
          }
          {
          isDisabledRight && <Pressable style={styles.naviagtionButtonRight}
              onPress={slideNext}
              >
               <FontAwesome name='caret-right' size={30}/>
              </Pressable>
            }    
        </View>
  )
}

export const styles = StyleSheet.create({
  mainImage:{
    height:SCREEN_WIDTH,
    width:"95%",
    resizeMode:"cover",  
  },

  mainImageSection:{
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH - 180,
  },
  naviagtionButtonLeft:{
    position:'absolute',
    bottom:10,
    left:20
  },
  naviagtionButtonRight:{
    position:'absolute',
    bottom:10,
    right:20
  }
})