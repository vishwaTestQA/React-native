// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome vishwa!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12'
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

import { SafeAreaView, StyleSheet, Platform, ScrollView } from "react-native";
import ImageComp from "../ComponentApp/ImageComp";
import { ScrollViewComp } from "../ComponentApp/ScrollViewComp";
import { ModalComp1 } from "../ComponentApp/ModalComp1";
import { StyleSheetAndBoxModal } from "../ComponentApp/StyleSheetAndBoxModal";
import { StyleInheritance } from "../ComponentApp/StyleInheritance";
import { BoxShadow } from "../ComponentApp/BoxShadow";
import { AlignItems } from "../ComponentApp/AlignItems";
import { JustifyContent } from "../ComponentApp/JustifyContent";
import { Positioning } from "../ComponentApp/Positioning";
import Pokemon from "../PokemonComp/Pokemon";
import PokemonTesting from "../PokemonComp/PokemonTesting";
const logo = require("../../assets/images/react-logo.png");

export default function HomeScreen(){
  
  const charmanderData = {
    name: "Charmander",
    image: require("../../assets/pokemon/charmander.png"),
    type: "Fire",
    hp:39,
    moves:["Scratch","Ember","Growl","Leer"],
    weaknesses:["Water","Rock"]
  }

  const squirtleData = {
    name: "Squirtle",
    image: require("../../assets/pokemon/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("../../assets/pokemon/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("../../assets/pokemon/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  return (
  <SafeAreaView style={styles.safeContainer}>
  {/* <View style={{backgroundColor:"plum"}}> */}
     {/* <ImageComp></ImageComp> */}
     {/* <ScrollViewComp></ScrollViewComp>
     <ModalComp1></ModalComp1> */}
     {/* <StyleSheetAndBoxModal/> */}
     {/* <BoxShadow/> */}
     {/* <StyleInheritance/> */}
     {/* <JustifyContent/> */}
     {/* <AlignItems/> */}
     {/* <Positioning/> */}
      {/* </View> */}
     <ScrollView>
     <Pokemon {...charmanderData}/>
     <Pokemon {...squirtleData}/>
     <Pokemon {...bulbasaurData}/>
     <Pokemon {...pikachuData}/>
     <PokemonTesting {...charmanderData}/>
  </ScrollView>
  </SafeAreaView>
  )
}

const styles =  StyleSheet.create({
  safeContainer: {
    flex:1,
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
})