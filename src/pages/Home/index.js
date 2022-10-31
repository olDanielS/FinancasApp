import React, {useContext}from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../Context/auth';

export default function Home() {
  const {user, signout} = useContext(AuthContext);
  return (
   <View>
        <Text> Usuario logado {user.nome}</Text>
        <Button
          title='Sair'
          onPress={() => signout()}
        />
   </View>
  );
}