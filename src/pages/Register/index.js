import React, {useContext, useState}from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert, DatePickerIOSBase} from 'react-native';
import { AuthContext } from '../Context/auth';
import {Background, Input, SubmitButton, SubmitText} from './styles';
import Header from '../../Compenents/Header';
import Picker from '../../Compenents/Picker/';
import  firebase from '../../Services/firebaseConnection';
import {format} from 'date-fns';

export default function Regist() {
  const {user} = useContext(AuthContext);
  const [value, setValue] = useState(''); 
  const [type, setType] = useState('receita');

  function handleSubmit(){
    if(isNaN(parseFloat(value)) || type === null || value == ''){
      alert('Preencha todos os campos!');
      Keyboard.dismiss();
      return
    }
    Alert.alert('Confirmando dados',
     `Tipo: ${type} - Valor: ${parseFloat(value)}`,
     [
      {
        text: 'Cancelar',
        style: 'cancel'
     },
     {
      text: 'Confirmar',
      onPress: () => handleAdd()
     }
    ]
  )
  }
  async function handleAdd(){
    let uid = user.uid;
    let key = await firebase.database().ref('history').child(uid).push().key;
   
    await firebase.database().ref('history').child(uid).child(key).set({
      tipo: type,
      valor: parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'),
      data: format(new Date(), 'dd/MM/yy')
    }).then(async () => {
        let user = firebase.database().ref('users').child(uid);
        user.once('value').then((snapshot) => {
          let saldo = parseFloat(snapshot.val().saldo)

          type == 'receita' ? saldo += parseFloat(value) : saldo -= parseFloat(value)
          user.child('saldo').set(saldo)
          Keyboard.dismiss()
          setValue('')      
        })
    }).catch((error) => {
      alert('Não foi possivel inserir o registro! '+ error)
    })

    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <Background>
      <Header/>
      <SafeAreaView style={{alignItems: 'center'}}>
      <Input 
      value={value}
      onChangeText={(text) => setValue(text)}
      keyboardType='numeric'
      returnKeyType='next'
      placeholder='Valor desejado'
      onSubmitEditing={() => Keyboard.dismiss()}
      />

      <Picker onChange={setType} tipo={type}/>
      <SubmitButton tip={type} onPress={handleSubmit}>
        <SubmitText> Registrar</SubmitText>
      </SubmitButton> 
      </SafeAreaView>  
    </Background>
    </TouchableWithoutFeedback>
  );
}
