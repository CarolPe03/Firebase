
 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js ";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.jss";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWAvG4Ba7Xl5T2m4zl8JqWrs6CJrek3jg",
  authDomain: "fir-crud-b319c.firebaseapp.com",
  projectId: "fir-crud-b319c",
  storageBucket: "fir-crud-b319c.appspot.com",
  messagingSenderId: "606076225751",
  appId: "1:606076225751:web:08993ee626214f79ca4892"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

