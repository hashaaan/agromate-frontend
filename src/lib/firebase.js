import FirebaseModule from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/analytics";
import firebaseConfig from "../constants/firebase";

const {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} = firebaseConfig;

let firebaseInitialized = false;

if (
  apiKey &&
  authDomain &&
  databaseURL &&
  projectId &&
  storageBucket &&
  messagingSenderId &&
  appId &&
  measurementId
) {
  FirebaseModule.initializeApp({
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
  });

  firebaseInitialized = true;
}

export const FirebaseRef = firebaseInitialized
  ? FirebaseModule.database().ref()
  : null;
export const Firebase = firebaseInitialized ? FirebaseModule : null;
