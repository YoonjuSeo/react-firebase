import firebase from 'firbase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCGrwAHoSwPmwLjGJ_ftpHG6HAMI0sGvww",
    authDomain: "yoonju-marioplan.firebaseapp.com",
    databaseURL: "https://yoonju-marioplan.firebaseio.com",
    projectId: "yoonju-marioplan",
    storageBucket: "yoonju-marioplan.appspot.com",
    messagingSenderId: "669870842876"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;