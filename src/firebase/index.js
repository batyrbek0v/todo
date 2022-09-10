import * as firebase from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDWlmCkT_UWTHMDDEaZDDCmfFaw6bauwiw",
  authDomain: "todo2-5dc7c.firebaseapp.com",
  projectId: "todo2-5dc7c",
  storageBucket: "todo2-5dc7c.appspot.com",
  messagingSenderId: "391599161284",
  appId: "1:391599161284:web:31d928707a33e2ca672e91"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)