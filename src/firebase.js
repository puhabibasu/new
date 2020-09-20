import firebase from "firebase"; 
const firebaseConfig = {
  apiKey: "AIzaSyC_Vlh1nUIcHH0fB7VZ39eaauA-as0QsBc",
  authDomain: "match-app1.firebaseapp.com",
  databaseURL: "https://match-app1.firebaseio.com",
  projectId: "match-app1",
  storageBucket: "match-app1.appspot.com",
  messagingSenderId: "353241004112",
  appId: "1:353241004112:web:3e31f3b15e9b8b8398b955",
  measurementId: "G-5MWMS1S85R"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
export default database;