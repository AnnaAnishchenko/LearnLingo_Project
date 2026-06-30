//firebase/firebase.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6UhHpnCbaJbGqygxWsf6EzEDJftgt6o0",
  authDomain: "learnlingoproject-54c76.firebaseapp.com",
  databaseURL:
    "https://learnlingoproject-54c76-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "learnlingoproject-54c76",
  storageBucket: "learnlingoproject-54c76.firebasestorage.app",
  messagingSenderId: "556908049293",
  appId: "1:556908049293:web:d643df0d0070c7e0f683c4",
  measurementId: "G-D6VW2N15SB",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
