import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


firebase.initializeApp({
  apiKey: "AIzaSyA996RhMTQJLc6CK6wx5wpd9KwnFHiR0Co",
  authDomain: "chat-react-e4841.firebaseapp.com",
  projectId: "chat-react-e4841",
  storageBucket: "chat-react-e4841.appspot.com",
  messagingSenderId: "68160696685",
  appId: "1:68160696685:web:1d7b0ef2cc70241fcb2a64",
  measurementId: "G-Q87MH6WGH5"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

