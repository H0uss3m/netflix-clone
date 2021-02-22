import firebase from 'firebase';
var provider = new firebase.auth.GoogleAuthProvider();


const firebaseConfig = {
  apiKey: "AIzaSyBfR9GLIPXOiJpWVcV2GH7wvPOVxgmi3eo",
  authDomain: "netflix-customized.firebaseapp.com",
  projectId: "netflix-customized",
  storageBucket: "netflix-customized.appspot.com",
  messagingSenderId: "225768714805",
  appId: "1:225768714805:web:f1c9ac77d3f74edf44377c",
  measurementId: "G-0KV957RRF6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, provider }
export default db;
