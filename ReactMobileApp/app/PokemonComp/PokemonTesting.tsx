import { View, Text, SafeAreaView, StyleSheet, Platform, Image, StyleProp, TextStyle, ViewStyle } from 'react-native'

interface PokemonDataType {
  name: String,
  hp:String,
  type:String,
  moves:String[],
  weaknesses: String[],
  image: Image,
  style?: StyleProp<ViewStyle>; // Accepting a style prop for View component
  textStyle?: StyleProp<TextStyle>;
}
const getTypeDetails = (type: String) =>{
  switch(type.toLowerCase()){
    case "electric":
     return {borderColor:"#FFD700", emoji:"⚡"}
     case "water":
      return {borderColor:"#FFD700", emoji:"💧"}
      case "fire":
        return {borderColor:"#FFD700", emoji:"🔥"}
        case "grass":
          return {borderColor:"#FFD700", emoji:"🌿"}
          default:
            return {borderColor:"#FFD700", emoji:"❓"}
  }
}

export default function PokemonTesting({
  name,
  image,
  type,
  moves,
  hp,
  weaknesses
}: PokemonDataType){

  const {borderColor, emoji} = getTypeDetails(type);
  return (
    <View style={styles.card}>

      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>HP:{hp}</Text>
     </View>

      <Image source={image} 
        accessibilityLable={`${name} pokemon`}
        style={styles.image}
        resizeMode='contain'
       ></Image>

      {/* <View style={styles.typeContainer}>
        <View style={[styles.typeBadge, {borderColor}]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View> */}
      <View style={styles.typeTestContainer}>
      <View style={[styles.typeBadge, {borderColor}]}>
      <Text style={styles.typeEmoji}>{emoji}</Text>
      <Text style={styles.typeText}>{type}</Text> 
      </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(",")}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>Weakness: {weaknesses.join(",")}</Text>
      </View>
    </View>
  )
};

const styles =  StyleSheet.create({
  card:{
    backgroundColor:"white",
    margin: 16,
    padding: 16,
    borderRadius: 20,
    borderWidth:2,
    borderColor:"#333",
    ...Platform.select({
      android:{
         elevation: 5,
      },
      ios:{
        shadowOffset:10,
        shadowOpacity: 0.3,
        shadowColor: "#333",
        shadowRadius: 4,
      },
    }),
  },
  nameContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  name:{
    fontSize: 30,
    fontWeight: "bold"
  },
  hp:{
    fontSize:15,
  },
  image:{
   width:"100%",
   height:200,  
   marginBottom:16,
  },

  typeTestContainer:{
    flexDirection: "row",

    // alignItems:"center",
    justifyContent:"center",
    // borderWidth:2,
    // width:100,
    // left:100,
    marginBottom: 16,

  },

  typeBadge:{
    flexDirection:"row",
    alignItems:"center",
    borderRadius:20,
    borderWidth:2,
    padding:10,
  },

  typeText:{
    fontWeight:"bold",
    fontSize:20,
  },
  typeEmoji:{
   fontSize:30,
  },
  movesContainer:{
    marginBottom:16,
  },
  movesText:{
    fontSize:20,
    fontWeight:"bold",
  },
  weaknessContainer:{
    marginBottom:16,
  },
  weaknessText:{
    fontSize:20,
    fontWeight:"bold",
  },
  
});
