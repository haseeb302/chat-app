// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvAQhPh67UTKfPlm_-6gNKmDFafRKRV9w",
  authDomain: "chat-app-27f11.firebaseapp.com",
  projectId: "chat-app-27f11",
  storageBucket: "chat-app-27f11.appspot.com",
  messagingSenderId: "129108176310",
  appId: "1:129108176310:web:326c4029e2818c5baea517",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
