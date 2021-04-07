import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDMjHQyZDosMfGi05UR_lZ25KNyOr4-Dtc",
    authDomain: "barter-7223d.firebaseapp.com",
    projectId: "barter-7223d",
    storageBucket: "barter-7223d.appspot.com",
    messagingSenderId: "807242290886",
    appId: "1:807242290886:web:22a44a6840f37d4f6e29c7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();