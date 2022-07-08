import * as firebase from 'firebase';
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJJ7P4v4R9899S8-ZPhy-dNr_Md2iG6GA",
    authDomain: "capstone-803db.firebaseapp.com",
    databaseURL: "https://capstone-803db-default-rtdb.firebaseio.com",
    projectId: "capstone-803db",
    storageBucket: "capstone-803db.appspot.com",
    messagingSenderId: "104089541669",
    appId: "1:104089541669:web:51ff5ab4a495243cfd33cc"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const fireDB = app.firestore();
  export default app;