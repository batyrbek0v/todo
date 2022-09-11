import * as firebase from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC_gV-QwjyV2j5XQdO6dasAOf2v3Uke7ec",
  authDomain: "todo-app-erlan.firebaseapp.com",
  databaseURL: "https://todo-app-erlan-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-app-erlan",
  storageBucket: "todo-app-erlan.appspot.com",
  messagingSenderId: "914861156508",
  appId: "1:914861156508:web:df04a5be54e44b28bf2559",
  measurementId: "G-W47THH6EHJ"
};


const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)