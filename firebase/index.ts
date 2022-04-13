// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXcJ_AWXM4GLLktdUzkIKSK3lmpRfC814",
  authDomain: "yelli-bebb3.firebaseapp.com",
  projectId: "yelli-bebb3",
  storageBucket: "yelli-bebb3.appspot.com",
  messagingSenderId: "295631269697",
  appId: "1:295631269697:web:49a92225cc3a73ba3cbbc0",
  measurementId: "G-VMJXVRHTMY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const store = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
