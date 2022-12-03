import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routers/';
import AuthProvider from './src/pages/Context/auth';
import { StatusBar } from 'expo-status-bar';

export default function AppFinancas() {
 return (
   <NavigationContainer>
    <AuthProvider>
      <StatusBar style='light' backgroundColor='#161616'/>
      <Routes/>
    </AuthProvider>
   </NavigationContainer>
  );
}