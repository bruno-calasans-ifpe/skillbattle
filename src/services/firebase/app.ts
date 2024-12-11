import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSEGER_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from "@/config/env";
import firebase, { FirebaseOptions } from "firebase/app";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const FIREBASE_CONFIG: FirebaseOptions = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSEGER_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

// if there's no initialized app
if (!firebase.getApps().length) {
  const app = initializeApp(FIREBASE_CONFIG);
}

// Initialize Firebase
export default firebase;
