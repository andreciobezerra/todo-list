/* eslint-disable no-undef */
import firebase from 'firebase/app';
// eslint-disable-next-line no-unused-vars
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const appFirebase = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = appFirebase.firestore();

export default db;