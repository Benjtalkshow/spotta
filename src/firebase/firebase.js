import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCb_SyByBJ7Hd0dJ6l4e2XhiKZtjoVnl6A",
  authDomain: "spotta-ng.firebaseapp.com",
  projectId: "spotta-ng",
  storageBucket: "spotta-ng.appspot.com",
  messagingSenderId: "505755664378",
  appId: "1:505755664378:web:07d75762e1043889e86e43"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
