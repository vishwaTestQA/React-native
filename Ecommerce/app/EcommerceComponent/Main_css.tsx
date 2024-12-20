import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  main:{
    display: "flex",
    borderStyle:"solid",
    // borderWidth:1,
    paddingTop:Platform.select({
      android:30,
    }),
    backgroundColor:"lightgrey",
  },

  headerContainer:{
    backgroundColor:"lightblue",
    // height:100,
    padding:10,
    // width: 400,
    // justifyContent:"center"
  },
  search_box:{
     borderWidth:1,
     borderRadius:5,
     borderStyle:"solid",
     backgroundColor:"white",
     color:"grey",
     height:50,
  },
  headerText:{
    padding:10,
    backgroundColor:"lightgreen"
  },
  headerSliderImage:{
  width:60,
  height:60,
  objectFit:"contain",  
  },
  headerSlidertext:{
    fontSize:10,
    textAlign:"center",
  },
  headerSlider:{
    padding:10,
    backgroundColor:"white",
  },
  firstSectionCard:{
    display:"flex",
    flexDirection:"column",
    backgroundColor: "white",
    width:180,
    marginRight:10,
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal:10,
    marginTop: 10,
  },
  firstSectionCardImage:{
    width:"90%",
    height: 140,
    objectFit: "cover",
  },


  horizontalImage:{
    width:SCREEN_WIDTH
  },
  box4_blk:{
    flexDirection: "row",
    flexWrap: "wrap",
    padding:10,
    backgroundColor:"lightgrey",
    alignItems:"center",
    justifyContent:"center",
  },
  card:{
    flexDirection: "column",
     width: SCREEN_WIDTH/2-10,
     height: (SCREEN_WIDTH/2)-10,
     backgroundColor:"white",
     gap:10,
     rowGap:10,
     alignItems:"center"
  },
  imageBox4:{
    width: "80%",
    height: 140,
    resizeMode:"cover",
  },
  box4_container:{
    backgroundColor:"white",
  },
  box4_containerText:{
     fontSize:20,
     fontWeight:"bold",
  },
  box4_text_deals_off:{
    backgroundColor:"red",
    color:"white",
    padding:3,
  },
  box4_deals_blk:{
    width:1
  },
  box4_text_deals:{
    color:"red",
    fontSize:12,
    marginLeft:10
  }

})