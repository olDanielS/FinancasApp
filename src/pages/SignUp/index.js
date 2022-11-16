import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import {Background, Container, ImgLogo, Input, SubmitButton, SubmitText, Button, ButtonText} from '../SignIn/styles';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../Context/auth';

export default function SignUp() {
  const navigation = useNavigation();
  const {SignUp} = useContext(AuthContext)

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function createUser(){

    if(nome != '' && email != '' && password != ''){
      SignUp(nome, email, password)
    }else{
      alert('Verifique os campos e tente novamente!')
      return
    }
  }
  return (
  <Background>
  <StatusBar barStyle="dark-content" backgroundColor='#FFF' />
  <Container>
    <ImgLogo source={require('../../assets/logo.png')}/>
    <Input
      autoCapitalize='none'
      autoCorrect={false}
      placeholder='Nome'
      value={nome}
      onChangeText={(text) => setNome(text)}
    />
    <Input
      autoCapitalize='none'
      autoCorrect={false}
      placeholder='Email'
      value={email}
      onChangeText={(text) => setEmail(text)}
    />
    <Input
      autoCapitalize='none'
      autoCorrect={false}
      secureTextEntry
      placeholder='Senha'
      value={password}
      onChangeText={(text) => setPassword(text)}
    />
    <SubmitButton onPress={createUser}>
      <SubmitText>Cadastrar</SubmitText>
    </SubmitButton>
    <Button onPress={() => navigation.navigate('SignIn')}> 
      <ButtonText>Já possui uma conta? Acessar</ButtonText>
    </Button>
  </Container>
</Background>
  );
}