import React, {useState, createContext, useEffect} from 'react';
import firebase from '../../Services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData(){
      const storageUser = await AsyncStorage.getItem('Auth_user');
      if(storageUser){
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
      setLoading(false)
    }
    loadData()
  }, [user]);

  async function signIn(email, password){
    await firebase.auth().signInWithEmailAndPassword(email, password).then( async(value) => {
      let uid = value.user.uid
      await firebase.database().ref('users').child(uid).once('value').then((snapshot) => {
        let data = {
          uid: uid,
          nome: snapshot.val().nome,
          email: snapshot.val().email,
          saldo: snapshot.val().saldo
        }
        setUser(data);
        storangeUser(data);
      }).then(() => {
      }).catch((error) => {
        alert(error)  
      })
    }).catch((error) => {
      alert(error)
    })
  }

  async function SignUp(nome, email, password){
    await firebase.auth().createUserWithEmailAndPassword(email, password).then(async (value) => {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).set({
       nome: nome,
       saldo: 0
      }).then(() => {
        let data = {
          uid: uid,
          nome: nome,
          email: email,
          saldo: saldo
        }
        setUser(data)
        storangeUser(data)
        alert('Usuario criado com sucesso')
      }).catch((error) => {
        console.log(error)
      })
    }).catch((error) => {
      alert('Algo deu errado... ' + error)
    })
  }

  async function Balance(){
    let uid = user.uid
    let saldoAtual = await firebase.database().ref('users').child(uid).child('saldo')

    return saldoAtual;
  }

  async function storangeUser(data){
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
  }

  async function signout(){
    await firebase.auth().signOut()
    await AsyncStorage.clear().then(() => {
      setUser(null)
    })
    setUser(null)
  }

  return(
  <AuthContext.Provider value={{signed: !!user, user, signIn, SignUp, loading, signout, Balance}}>
    {children}
  </AuthContext.Provider>
  )
}


export default AuthProvider;