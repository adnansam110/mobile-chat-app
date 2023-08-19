import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SocketIOClient from 'socket.io-client';
import Homepage from './pages/Homepage/Homepage';
import { ChatScreen } from './pages/ChatScreen/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatScreen">
        <Stack.Screen 
          name="Homepage" 
          component={Homepage} 
        />
        <Stack.Screen 
          name="ChatScreen" 
          component={ChatScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}