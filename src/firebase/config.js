import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDGsu3QKbM-7KluHnklxRCmPbJHYiWKuwo",
  authDomain: "givelove-bb25c.firebaseapp.com",
  projectId: "givelove-bb25c",
  storageBucket: "givelove-bb25c.appspot.com",
  messagingSenderId: "725844587522",
  appId: "1:725844587522:web:375b51041ea89ae6abe31b",
  measurementId: "G-GF760ET81G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app