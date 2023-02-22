import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'

const ChatScreen = ({route, navigation}) => {
    const { chatName } = route.params;
    useLayoutEffect(() => {
        navigation.setOptions({
            title: chatName,
        });
      }, []);
      
  return (
    <View>
      <Text>{chatName}</Text>
    </View>
  )
}

export default ChatScreen