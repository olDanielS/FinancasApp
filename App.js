import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routers/';
import AuthProvider from './src/pages/Context/auth';

export default function AppFinancas() {
 return (
   <NavigationContainer>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
   </NavigationContainer>
  );
}