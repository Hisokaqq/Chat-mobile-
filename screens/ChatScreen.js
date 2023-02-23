import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';

const ChatScreen = ({route, navigation}) => {
  const [input, setInput] = useState("")
  const { chatName, id } = route.params;
  const [messages, setMessages] = useState([])
  const scrollViewRef = useRef(null);

  const sendMessage = () => {
    db.collection("chats").doc(id).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      email: auth.currentUser.email,
      displayName: auth.currentUser.displayName
    })
    setInput("")
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: chatName,
    });
    
  }, []);
  
  useLayoutEffect(() => {
    const unsubscribe = db.collection("chats").doc(id).collection("messages").orderBy("timestamp", "asc").onSnapshot(
      snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})));
      }
    )
    return unsubscribe
  }, [route])

  const handleContentSizeChange = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#fff" }} behavior="padding" keyboardVerticalOffset={90}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <ScrollView ref={scrollViewRef} onContentSizeChange={handleContentSizeChange}>
            <View className="flex-1 mt-3 space-y-3 px-4">
              {messages.map(({id, data}, index) => (
                data?.email === auth.currentUser.email ? (
                  <View className="space-y-1  self-end bg-gray-300 rounded-xl items-end p-3 pl-6" key={id}>
                    <Text className="text-l">{data.message}</Text>
                  </View>
                ): 
                (
                  <View className="space-y-1 self-start bg-gray-300 rounded-xl p-3 pr-6" key={id}>
                    {index === 0 || data.displayName !== messages[index-1].data.displayName ? <Text className="font-extrabold text-xl">{data.displayName}</Text> : null}
                    <Text className="text-l">{data.message}</Text>
                  </View>
                )
              ))}
            </View>
          </ScrollView>
          <View className="flex-row w-full justify-between p-4 items-center">
            <TextInput className="flex-1 bg-gray-300 p-3 rounded-lg" value={input} onSubmitEditing={sendMessage} onChangeText={(text)=>setInput(text)} placeholder='esadssadas'/>
            <TouchableOpacity className="p-4 " activeOpacity={.5} onPress={sendMessage}>
              <Icon name="send" size={25}  />
            </TouchableOpacity>
          </View>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
  }
  
  export default ChatScreen
  