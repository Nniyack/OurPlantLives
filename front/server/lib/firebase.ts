//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const {
  FIREBASE_ADMIN_API_KEY,
  FIREBASE_ADMIN_DOMAIN,
  FIREBASE_ADMIN_PROJECT_ID,
  FIREBASE_ADMIN_STORAGE_BUCKET,
  FIREBASE_ADMIN_MESSAGING_SENDER_ID,
  FIREBASE_ADMIN_APP_ID,
  FIREBASE_ADMIN_MEASUREMENT_ID
} = process.env
console.log(process.env)
const firebaseConfig = {
  apiKey: FIREBASE_ADMIN_API_KEY,
  authDomain: FIREBASE_ADMIN_DOMAIN,
  projectId: FIREBASE_ADMIN_PROJECT_ID,
  storageBucket: FIREBASE_ADMIN_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_ADMIN_MESSAGING_SENDER_ID,
  appId: FIREBASE_ADMIN_APP_ID,
  measurementId: FIREBASE_ADMIN_MEASUREMENT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

export const firestoreDb = getFirestore(firebaseApp)