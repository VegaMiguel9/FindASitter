// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI592_3i4osb7w5ZmShnyee0RjkdbY5HQ",
  authDomain: "uploadingfile-ae3e4.firebaseapp.com",
  projectId: "uploadingfile-ae3e4",
  storageBucket: "uploadingfile-ae3e4.appspot.com",
  messagingSenderId: "1041168678819",
  appId: "1:1041168678819:web:0909db825c271112f06416"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)