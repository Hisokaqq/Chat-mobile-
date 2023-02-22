import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#2C6BED"},
  headerTitleStyle: {color: "white"},
  headerTintColor: "white"
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={globalScreenOptions}>
        <Stack.Screen name="Home" component={HomeScreen}
        // options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={LoginScreen}
        // options={{headerShown: false}}
        />
        <Stack.Screen name="Registration" component={RegistrationScreen}
        // options={{headerShown: false,  }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

