import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Image, Input, Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const signIn = () => {};

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
        <StatusBar style='light' />
        <Image source={require('../images/background.png')} />
        <View style={styles.inputContainer}>
          <Input placeholder='Full Name' value={fullName} onChangeText={(text) => setFullName(text)} />
          <Input placeholder='Email' value={email} onChangeText={(text) => setEmail(text)} />
          <Input placeholder='Password' secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
          <Input placeholder='Repeat password' secureTextEntry value={repeatPassword} onChangeText={(text) => setRepeatPassword(text)} />
        </View>
        <Button style={styles.button} onPress={signIn} title='Register' />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Already have an account?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    width: 200,
  },
  inputContainer: {
    width: 300,
  },
  text: {
    marginTop: 20,
  },
});

export default RegistrationScreen;
