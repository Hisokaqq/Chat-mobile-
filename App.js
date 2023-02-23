import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import AddChatScreen from './screens/AddChatScreen';
import ChatScreen from './screens/ChatScreen';
const Stack = createNativeStackNavigator();

const globalScreenOptions = {
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTitleStyle: {
        color: "#000",
      },
      headerTintColor: "#000", 
}

export default function App() {
  
  return (
    <NavigationContainer>
      <StatusBar style="dark"/>
      <Stack.Navigator initialRouteName='Login' screenOptions={globalScreenOptions}>
        <Stack.Screen name="Home" component={HomeScreen}
        // options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={LoginScreen}
        />
        <Stack.Screen name="Registration" component={RegistrationScreen}
        />
        <Stack.Screen name="AddChat" component={AddChatScreen}
        />
        <Stack.Screen name="Chat" component={ChatScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

