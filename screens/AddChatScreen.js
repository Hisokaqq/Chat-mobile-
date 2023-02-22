import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from 'react-native-elements';
import { db } from '../firebase';
import { color } from 'react-native-elements/dist/helpers';

const AddChatScreen = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const inputRef = useRef();
  useLayoutEffect(() => {
    navigation.setOptions({
        title: "Add Chat",
    });
  }, []);

  useEffect(() => {
    setTimeout(() => inputRef.current.focus(), 500);
  }, []);

  const createChat = async () => {
    await db.collection("chats").add({
        chatName: input
    }).then(()=>{
        navigation.replace("Home")
    }).catch(error=>alert(error.message))
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 300 }}>
            <Input
              ref={inputRef}
              value={input}
              onChangeText={(text) => setInput(text)}
              placeholder="Enter a Chat name"
              onSubmitEditing={createChat}
            />
          </View>
          <Button  onPress={createChat} style={{ width: 200}} title="create new Chat" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddChatScreen;
