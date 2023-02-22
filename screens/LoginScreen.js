import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import React, { useState } from 'react'
import {Image, Input, Button} from "react-native-elements"
import { StatusBar } from 'expo-status-bar'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const SignIn = () => {

    }

    const dismissKeyboard = () => {
        Keyboard.dismiss()
    }
    
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
        <StatusBar style="light" />
        <Image source={require("../images/background.png")}/>
        <View style={styles.inputContainer} >
            <Input autoFocus placeholder='Email' type="email" value={email} onChangeText={(e)=>setEmail(e.target.value)}/>
            <Input  placeholder='Password' secureTextEntry type="password" value={password} onChangeText={(e)=>setPassword(e.target.value)}/>
        </View>
          <Button style={styles.button}  onPress={SignIn} title="Login"/>
          <TouchableOpacity onPress={()=>navigation.navigate("Registration")}>
              <Text style={styles.link}>Have no account?</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        width: 200
    },
    inputContainer: {
        width: 300
    },
    link: {
        marginTop: 20,
    },
})

export default LoginScreen
