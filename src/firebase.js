import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbdPvOFGvmyoVHH4x6_saf07-s2fkbMDc",
    authDomain: "facebook-clone-22da6.firebaseapp.com",
    databaseURL: "https://facebook-clone-22da6.firebaseio.com",
    projectId: "facebook-clone-22da6",
    storageBucket: "facebook-clone-22da6.appspot.com",
    messagingSenderId: "609616321362",
    appId: "1:609616321362:web:846a0a535c95b95bb6f88b",
    measurementId: "G-M8PJV3XQJ6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;