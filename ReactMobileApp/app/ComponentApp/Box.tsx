import {View, Text, TextStyle, StyleProp,ViewStyle, StyleSheet} from 'react-native'

interface MyComponentProps {
  children: string,
  style: StyleProp<ViewStyle | TextStyle>;
}

export const Box : React.FC<MyComponentProps> = ({children, style}) => {
  return (
    <View style={[styles.container,style]}>
      <Text>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    // margin:10,
    width:100,
    height:100,
  },

})
