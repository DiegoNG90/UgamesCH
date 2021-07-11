import * as firebase from 'firebase/app';
import 'firebase/firestore';

var app = firebase.initializeApp({
  apiKey: "AIzaSyD8R5_UTCg1qrTx6mjMkPz3Hsd5RCPvGSE",
  authDomain: "coderhouse-eccomerce.firebaseapp.com",
  projectId: "coderhouse-eccomerce",
  storageBucket: "coderhouse-eccomerce.appspot.com",
  messagingSenderId: "9015356938",
  appId: "1:9015356938:web:1a84bc8921e24f7da879f3"
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
