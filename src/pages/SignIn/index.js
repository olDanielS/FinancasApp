import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import {Background, Container, ImgLogo, Input, SubmitButton, SubmitText, Button, ButtonText} from './styles';
import {useNavigation} from '@react-navigation/native'
import { AuthContext } from '../Context/auth';

function SignIn() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {signIn} = useContext(AuthContext);

  function Login(){
    if(email != '' && password != ''){
      signIn(email, password)
    }
    else{
      alert('Preencha os campos corretamente!')
    }
  }

 return (
   <Background>
      <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
      <Container>
        <ImgLogo source={require('../../assets/logo.png')}/>
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
          placeholder='Senha'
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        
        />
        <SubmitButton onPress={Login}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Button> 
          <ButtonText onPress={() => navigation.navigate('SignUp')}> Não possui uma conta? Criar Conta</ButtonText>
        </Button>
      </Container>
   </Background>
  );
}
export default SignIn;
