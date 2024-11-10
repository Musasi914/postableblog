import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8YCS9bEFJu9lAaMaJXZsTdRZWNipzoPc",
  authDomain: "fir-blog-tutorial-53407.firebaseapp.com",
  projectId: "fir-blog-tutorial-53407",
  storageBucket: "fir-blog-tutorial-53407.firebasestorage.app",
  messagingSenderId: "205135936777",
  appId: "1:205135936777:web:abaab0b2013e7de069e7d8",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };
