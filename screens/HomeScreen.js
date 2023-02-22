import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, SnapshotViewIOS } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CustomListItem from '../components/CustomListItem'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-elements'
import { auth, db } from '../firebase'
import { Icon } from 'react-native-elements';

const HomeScreen = () => {
  const navigation = useNavigation()
  const [chats, setChats] = useState([])
  useEffect(()=>{
    const unsubscribe = db.collection("chats").onSnapshot(snapshot=>(
      setChats(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    ))
  },[])
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chats",
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTitleStyle: {
        color: "#000"
      },
      headerTitleColor: "black",
      headerLeft: () => (
        <View className="">
          <TouchableOpacity  activeOpacity={.5}>
            <Avatar rounded source={require("../images/avatar.png")} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View className="flex-row space-x-3 items-center">
          <TouchableOpacity>
          <Icon
            type='font-awesome-5'
            name='comments'
            size={24}
            onPress={() => navigation.navigate("AddChat")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={signOut}>
            <Icon name='logout' type='material-community' size={28} color='#000' />
          </TouchableOpacity>
            
        </View>
      ),
    });
    
  }, []);
  const signOut = () => {
    auth.signOut().then(()=>{
      navigation.replace("Login")
    })
  } 

  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", 
    {
      id,
      chatName
    })
  }
  
  return (
    <View className="flex-1">
      <ScrollView className="flex-1">
          {chats.map(({id, data:{chatName}})=>(
        <CustomListItem id={id} chatName={chatName} key={id} enterChat={enterChat}/>
          ))}
      </ScrollView>
    </View>
  )
}

export default HomeScreen