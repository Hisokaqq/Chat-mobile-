import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import React, { useEffect, useState } from 'react'
import {Image, Input, Button} from "react-native-elements"
import { StatusBar } from 'expo-status-bar'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

const LoginScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const SignIn = () => {
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }

    useEffect(()=>{
        const unsubscribe =  auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                  });
            }
        })
        return unsubscribe
    },[])

    const dismissKeyboard = () => {
        Keyboard.dismiss()
    }
    
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
        <StatusBar style="light" />
        <Image source={require("../images/background.png")}/>
        <View style={styles.inputContainer} >
            <Input autoFocus placeholder='Email' type="email" value={email} onChangeText={(text)=>setEmail(text)}/>
            <Input  placeholder='Password' secureTextEntry type="password" value={password} onChangeText={(text)=>setPassword(text)}/>
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
