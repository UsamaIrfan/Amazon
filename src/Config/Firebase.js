import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

const  firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyDe-nHU1uPG_IyXhl_TWWqX2g1YNr9hwNI",
   authDomain: "folx-7fde7.firebaseapp.com",
   databaseURL: "https://folx-7fde7.firebaseio.com",
   projectId: "folx-7fde7",
   storageBucket: "folx-7fde7.appspot.com",
   messagingSenderId: "766559390143",
   appId: "1:766559390143:web:fbdee10234f7195fa3f90a",
   measurementId: "G-QB9F0744LN"
 });

const auth = firebase.auth();
const projectStorage = firebaseApp.storage();
const projectFirestore = firebaseApp.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {auth, projectFirestore , projectStorage , timeStamp };