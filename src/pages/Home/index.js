import React, {useContext, useState, useEffect}from 'react';
import firebase from '../../Services/firebaseConnection';
import { AuthContext } from '../Context/auth';
import Header from '../../Compenents/Header';
import {Background,Container,UserName, UserMoney, Title, Movements} from './styles.js';
import Moviments from '../../Compenents/Moviments';
import {format} from 'date-fns';

export default function Home() {

  const {user} = useContext(AuthContext);
  let uid = user.uid;
  const [saldo, setSaldo] = useState(0);

  const [historico, setHistorico] = useState([]);
    

  useEffect(() => {
      async function loadList(){
        await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
          setSaldo(snapshot.val().saldo);
        });

        await firebase.database().ref('history').child(uid).orderByChild('data').equalTo(format(new Date, 'dd/MM/yy'))
        .limitToLast(10).on('value', (snapshot) => {
          setHistorico([]);
          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor
            };

            setHistorico(oldArray => [...oldArray, list].reverse())
          });

        })


      }
      loadList()
  }, [])
    return (
    <Background>
      <Header/>
      <Container>
        <UserName>{user ? user.nome : ''}</UserName>
        <UserMoney>R$ {user? saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') : ''}</UserMoney>
      </Container>
      <Title>Ultimas movimentações</Title>
      <Movements
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={item => item.id}
        renderItem={ ({item}) => <Moviments data={item} />}
      />
    </Background>
  );
}