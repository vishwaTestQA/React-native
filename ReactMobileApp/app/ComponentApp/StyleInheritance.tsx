import {View, Text, StyleSheet} from 'react-native'


export const StyleInheritance = () => {
  return (
    <View style={styles.container}>
      <Text>
        Text 1
        <Text>Text 2</Text>
      </Text>
    </View>
  )
}

const styles =  StyleSheet.create({
  container: {
    backgroundColor:"lightblack",
    color: "white",
  },
  text:{
    color: "red"
  }
})
