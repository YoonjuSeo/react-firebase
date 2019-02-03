import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import AngularFireModule  from 'node_modules/@angular/fire';
// import React from 'react/react-in-jsx-scope';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCGrwAHoSwPmwLjGJ_ftpHG6HAMI0sGvww",
    authDomain: "yoonju-marioplan.firebaseapp.com",
    databaseURL: "https://yoonju-marioplan.firebaseio.com",
    projectId: "yoonju-marioplan",
    storageBucket: "yoonju-marioplan.appspot.com",
    messagingSenderId: "669870842876"
  };
  //initialize firebase
  firebase.initializeApp(config);



  // AngularFireModule.initializeApp({
  //   apiKey: "AIzaSyCGrwAHoSwPmwLjGJ_ftpHG6HAMI0sGvww",
  //   authDomain: "yoonju-marioplan.firebaseapp.com",
  //   databaseURL: "https://yoonju-marioplan.firebaseio.com",
  //   projectId: "yoonju-marioplan",
  //   storageBucket: "yoonju-marioplan.appspot.com",
  //   messagingSenderId: "669870842876"
  // });
  // export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


//  firebase.initializeApp(config);
  // firebase.firestore().settings({ timestampsInSnapshots: true });
  // if (!firebase.apps.length) {
  //   firebase.initializeApp({});
  // }
  export default firebase;