import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-S_CQY02qioBPDpmsaC-dmRh0uKjN2Ho",
  authDomain: "linkedin-clone-128aa.firebaseapp.com",
  projectId: "linkedin-clone-128aa",
  storageBucket: "linkedin-clone-128aa.appspot.com",
  messagingSenderId: "241935490838",
  appId: "1:241935490838:web:dea04a5fd05fbdea417a37",
  measurementId: "G-WEBVMQ83ZT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
