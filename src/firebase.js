import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsfL20hnA-uqscz59hHe-NrAOQu7LhWX0",
  authDomain: "clone-778d0.firebaseapp.com",
  projectId: "clone-778d0",
  storageBucket: "clone-778d0.appspot.com",
  messagingSenderId: "193748227203",
  appId: "1:193748227203:web:8ee19fff45c59471cab7b6",
  measurementId: "G-DYGGQ4JQRZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};