//services/auth.ts

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut, onAuthStateChanged } from "firebase/auth";

import type { User } from "firebase/auth";

export const registerUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => signOut(auth);

export const subscribeToAuth = (callback: (user: User | null) => void) =>
  onAuthStateChanged(auth, callback);
