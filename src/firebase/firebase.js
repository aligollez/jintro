import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC074ngfAUBe7odxwnmpGhq9fhkWKqM0Lw",
  authDomain: "jintro-9fa4b.firebaseapp.com",
  databaseURL: "https://jintro-9fa4b.firebaseio.com",
  projectId: "jintro-9fa4b",
  storageBucket: "jintro-9fa4b.appspot.com",
  messagingSenderId: "557067039459"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// firebase.database().ref().set({
//   name: 'Paul G',
//   age: 29
// });