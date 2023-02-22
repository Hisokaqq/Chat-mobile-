import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Avatar, Image, ListItem } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const CustomListItem = ({id, chatName, enterChat}) => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
        });
      }, []);
  return (
    <TouchableOpacity onPress={()=>enterChat(id, chatName)} activeOpacity={.5}>
    <ListItem bottomDivider>
      <Avatar rounded source={require("../images/avatar.png")} />
      <ListItem.Content>
        <ListItem.Title style={{fontWeight:"800"}}>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
            Abc
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    </TouchableOpacity>
  )
}

export default CustomListItem