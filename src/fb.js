import firebase from 'firebase/app'
import 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCRyi6kXBcei6rIOvOYkJEZVqm48DrQtXI",
    authDomain: "kustam-kayaks.firebaseapp.com",
    databaseURL: "https://kustam-kayaks.firebaseio.com",
    projectId: "kustam-kayaks",
    storageBucket: "kustam-kayaks.appspot.com",
    messagingSenderId: "321631924376",
    appId: "1:321631924376:web:59b37e168ef2edd86420ed",
    measurementId: "G-VCWHV6DKDN"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
const db = firebase.firestore();

export default db;