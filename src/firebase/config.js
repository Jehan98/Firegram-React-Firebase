 import firebase from "firebase/app";
 import "firebase/storage";
 import 'firebase/analytics'
 import "firebase/firestore"
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyASIp0apF3cTmvWT7AnbhNuA2lx17ZcF3I",
    authDomain: "firegram-9a46b.firebaseapp.com",
    projectId: "firegram-9a46b",
    storageBucket: "firegram-9a46b.appspot.com",
    messagingSenderId: "598167324376",
    appId: "1:598167324376:web:fc54c17f9b8dd77719f9ad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectStorage, projectFirestore, timeStamp}