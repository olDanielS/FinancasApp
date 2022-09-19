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
  }, []);

  async function signIn(email, password){
    await firebase.auth().signInWithEmailAndPassword(email, password).then( async(value) => {
      let uid = value.user.uid
      await firebase.database().ref('users').child(uid).once('value').then((snapshot) => {
        let data = {
          uid: uid,
          nome: snapshot.val().nome,
          email: snapshot.val().email
        }
        setUser(data);
        storangeUser(data);
      }).then(() => {
        alert('Usuario logado')
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
       nome: nome
      }).then(() => {
        let data = {
          uid: uid,
          nome: nome,
          email: email
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

  async function storangeUser(data){
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
  }

  return(
  <AuthContext.Provider value={{signed: !!user, user, signIn, SignUp, loading}}>
    {children}
  </AuthContext.Provider>
  )
}


export default AuthProvider;