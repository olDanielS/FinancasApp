import React, {useContext}from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../Context/auth';
import {Container, BtnNewRecord, BtnTextNewRecord, UserName, BtnLogout, BtnTextLogout} from './styles';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Compenents/Header';

export default function Profile() {
  const {user, signout} = useContext(AuthContext);
  const navigation = useNavigation();

  return (
   <Container>
        <Header/>
        <UserName>{user.nome}</UserName>
        <BtnNewRecord onPress={() => navigation.navigate('Regist')}>
          <BtnTextNewRecord>Registrar gastos</BtnTextNewRecord>
        </BtnNewRecord>
        <BtnLogout onPress={() => signout()}>
          <BtnTextLogout>Sair</BtnTextLogout>
        </BtnLogout>
   </Container>
  );
}