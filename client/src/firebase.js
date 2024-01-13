// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoqamNnTNbqTeDNTJGtMBZ-4Ln2n1JXK0",
  authDomain: "mern-estate-858b1.firebaseapp.com",
  projectId: "mern-estate-858b1",
  storageBucket: "mern-estate-858b1.appspot.com",
  messagingSenderId: "441628186778",
  appId: "1:441628186778:web:4f4411fc179cebea3e2723"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);