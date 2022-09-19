import React, {useContext}from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../Context/auth';

export default function Home() {
  const {user} = useContext(AuthContext);
  return (
   <View>
        <Text> Usuario logado {user.nome}</Text>
   </View>
  );
}