import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getFirestore} from "firebase/firestore"
import { getStorage} from "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBdNORfrnWQMFqGaxhi-BOMxW1G_9xZQ-4",
  authDomain: "givelove- a971b.firebaseapp.com",
  projectId: "givelove-a971b",
  storageBucket: "givelove-a971b.appspot.com",
  messagingSenderId: "1013001398701",
  appId: "1:1013001398701:web:a23bbf49422293a7e31924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);
 export const storage = getStorage(app);
 
 
 export default app