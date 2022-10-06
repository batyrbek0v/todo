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

const { initializeAppCheck, getToken } = require('firebase/app-check');

const appCheck = initializeAppCheck(
  app,
  { provider: provider } // ReCaptchaV3Provider or CustomProvider
);

const callApiWithAppCheckExample = async () => {
  let appCheckTokenResponse;
  try {
    appCheckTokenResponse = await getToken(appCheck, /* forceRefresh= */ false);
  } catch (err) {
    // Handle any errors if the token was not retrieved.
    return;
  }

  // Include the App Check token with requests to your server.
  const apiResponse = await fetch('https://yourbackend.example.com/yourApiEndpoint', {
    headers: {
      'X-Firebase-AppCheck': appCheckTokenResponse.token,
    }
  });

  // Handle response from your backend.
};