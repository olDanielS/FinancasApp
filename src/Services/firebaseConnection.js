import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDvJ7i_DyZjmFZktgrBqe-4i5iS23uG-gE",
  authDomain: "financas-187e1.firebaseapp.com",
  databaseURL: "https://financas-187e1-default-rtdb.firebaseio.com",
  projectId: "financas-187e1",
  storageBucket: "financas-187e1.appspot.com",
  messagingSenderId: "118980142613",
  appId: "1:118980142613:web:bdd5b9f49936ccac8b501c"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export default firebase;
