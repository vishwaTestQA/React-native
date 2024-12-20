import { View, Text, TextInput, Image, SafeAreaView, FlatList, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Main_css'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import MainImageComponent from './MainImageComponent';

export default function Main() {
  const [searchText, SetsearchText] = useState('');

  const image = [
    {
      image: require('../../assets/icons/beauty.jpg'),
      text: "Beauty"
    },
    {
      image: require('../../assets/icons/mobile.webp'),
      text: "Mobiles"
    },
    {
      image: require('../../assets/icons/fashion.jpg'),
      text: "Fashion"
    },
    {
      image: require('../../assets/icons/travel.png'),
      text: "Travel"
    },
    {
      image: require('../../assets/icons/HomeAppl.png'),
      text: "Home Appliances"
    },
    {
      image: require('../../assets/icons/Electronics.png'),
      text: "Electronics"
    },
    {
      image: require('../../assets/icons/mobile.webp'),
      text: "Mobiles"
    },
    {
      image: require('../../assets/icons/games.jpg'),
      text: "Games"
    },
    {
      image: require('../../assets/icons/travel.png'),
      text: "Mobiles"
    },
    {
      image: require('../../assets/icons/mobile.webp'),
      text: "Mobiles"
    }
  ]

  const firstSection = [
    {
      text: "Keep shoping for smartphones and basic mobiles",
      image: require('../../assets/icons/oppo.jpg')
    },
    {
      text: "Keep shoping for televisions and related products",
      image: require('../../assets/icons/Television.jpg')
    },
    {
      text: "Recommended deals for you",
      image: require('../../assets/pics/sam2.jpg')
    },
    {
      text: "Deal for you in Electronics",
      image: require('../../assets/pics/sam1.jpg')
    },
    {
      text: "Buy it again",
      image: require('../../assets/pics/Samsungs23ultra.jpg')
    },
  ]



  const firstSection2 = [
    {
      horizonatalScroll: [{
        text: "Keep shoping for smartphones and basic mobiles",
        image: require('../../assets/icons/oppo.jpg')
      },
      {
        text: "Keep shoping for televisions and related products",
        image: require('../../assets/icons/Television.jpg')
      },
      {
        text: "Recommended deals for you",
        image: require('../../assets/pics/sam2.jpg')
      },
      {
        text: "Deal for you in Electronics",
        image: require('../../assets/pics/sam1.jpg')
      },
      {
        text: "Buy it again",
        image: require('../../assets/pics/Samsungs23ultra.jpg')
      }],
    },
    {
      img: {
        image: require('../../assets/horizontal/redmi.jpg'),
        link: ""
      }
    },
    {
      dealsBox: [
        {
          image: require('../../assets/televisions/sony.webp'),
          off: 62
        },
        {
          image: require('../../assets/televisions/sony.webp'),
          off: 63
        },
        {
          image: require('../../assets/mobileAccs/samRing.jpg'),
          off: 28
        },
        {
          image: require('../../assets/mobileAccs/samRing2.jpg'),
          off: 42
        }
      ]
    }, {
      relatedToViewed: {

      }
    },
    {
      img: {
        image: require('../../assets/horizontal/redmi.jpg'),
        link: ""
      }
    },

  ]

  {/* <FontAwesome name="home" size={30} color="green"/> */ }

  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
        <TextInput style={styles.search_box} onChangeText={SetsearchText}
          value={searchText}
          placeholder='Search Amazon.in'
        ></TextInput>
      </View>
      <ScrollView>
        <Text style={styles.headerText}>
          Delivery to vishwa - Madurai
        </Text>
        <View >
          <FlatList
            data={image}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={styles.headerSlider}>
                  <Image source={item.image} style={styles.headerSliderImage} />
                  <Text style={styles.headerSlidertext}>{item.text}</Text>
                </View>
              )
            }}
            horizontal
          // keyExtractor={(item) => }
          />
        </View>
        <MainImageComponent />

        <View>
          <FlatList data={firstSection}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={styles.firstSectionCard}>
                  <Text numberOfLines={2} ellipsizeMode="tail">{item.text}</Text>
                  <Image source={item.image} style={styles.firstSectionCardImage}></Image>
                </View>
              )
            }}
            horizontal
          />
        </View>



        <FlatList data={firstSection2}
          renderItem={({ item }) => {
            return (
              <View>
                 {
                  item.img && <Image source={item.img.image}
                  style={styles.horizontalImage}
                  ></Image>
                 }
                 {
                  item.dealsBox && <View style={styles.box4_container}>
                    <Text style={styles.box4_containerText}>Deals for you</Text>
                    <View style={styles.box4_blk}>
                    {
                      item.dealsBox.map((item,index)=>{
                        return <View key={index} style={styles.card}>
                        <Image source={item.image} style={styles.imageBox4}></Image>
                     
                         <View style={{flexDirection:"row", alignItems:"center",
                          justifyContent:"space-between"
                         }}>
                          <Text style={styles.box4_text_deals_off}>
                            {item.off}% off
                         </Text>
                         <Text style={styles.box4_text_deals}>
                          Limited time deal</Text>
                          </View>
                      </View>
                      })
                    }
                    </View>
                  </View>
                 }
              </View>
            )
          }}
        />
      </ScrollView>
    </View>
  )
}