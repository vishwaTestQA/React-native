import { NavigationContainer } from "@react-navigation/native";
import HomeScreen1 from "../NaviagtionComponent/HomeScreen1";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../NaviagtionComponent/AboutScreen";

const Stack = createNativeStackNavigator();

export default function HomeScreen(){
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen1}/>
        <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

// const styles =  StyleSheet.create({
//   safeContainer: {
//     flex:1,
//     paddingTop: Platform.OS === 'android' ? 40 : 0
//   },
// })