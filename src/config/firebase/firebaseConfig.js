import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA3orOmUF5a5nsSEMyqt8v9A4z709_RsEE",
  authDomain: "it-blog-1c495.firebaseapp.com",
  databaseURL: "https://it-blog-1c495-default-rtdb.firebaseio.com",
  projectId: "it-blog-1c495",
  storageBucket: "it-blog-1c495.appspot.com",
  messagingSenderId: "634031988399",
  appId: "1:634031988399:web:46b640ee6c4b4c10157e5a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);