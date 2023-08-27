import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  orderBy,
  serverTimestamp,
  getDocs,
  onSnapshot,
  deleteDoc,
  query,
  where,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-storage.js";

const firebaseConfig = {
        apiKey: "AIzaSyBrkvix4-KkhJcPxskMHDm-Jus3YzIoVcI",
        authDomain: "mybloggingapp-be266.firebaseapp.com",
        databaseURL: "https://mybloggingapp-be266-default-rtdb.firebaseio.com",
        projectId: "mybloggingapp-be266",
        storageBucket: "mybloggingapp-be266.appspot.com",
        messagingSenderId: "434430400334",
        appId: "1:434430400334:web:a00e9141a5a7cdb500f01f",
        measurementId: "G-330HTSZZV3"
      };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  signOut,
  doc,
  onSnapshot,
  onAuthStateChanged,
  deleteDoc,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  query,
  orderBy,
  serverTimestamp,
  auth,
  db,
  where,
  updateDoc,
  arrayRemove,
  arrayUnion,
};