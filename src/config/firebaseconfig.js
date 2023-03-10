import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDhUGsUx_haRUHbERQfFxIxLxVVM_6Bqpg",
    authDomain: "task-21937.firebaseapp.com",
    projectId: "task-21937",
    storageBucket: "task-21937.appspot.com",
    messagingSenderId: "420211312267",
    appId: "1:420211312267:web:8024823e8418408159f68e",
    measurementId: "G-Q4QTY6GBN7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database  = firebase.firestore()
  export default database