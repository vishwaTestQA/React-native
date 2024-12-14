import React, { useState } from 'react'
import {View, Modal, Button, Text} from 'react-native'

export const ModalComp1 = () => {
  const [isClosed, setIsClosed] = useState(true);
  const handleClose = () =>{
       return setIsClosed(!isClosed);
  }
  return (
    <View>
    <Modal visible = {isClosed} 
           onRequestClose={()=> setIsClosed(false)}
           animationType='slide'
           presentationStyle='pageSheet'
           >
      <Button title={'close'} onPress={handleClose}></Button>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit veritatis incidunt repellat, iusto molestias numquam doloremque officiis praesentium reiciendis, eum ad omnis? Suscipit ducimus quos nesciunt non rerum tempora reprehenderit.
      </Text>
    </Modal>
    </View>
  )
}
