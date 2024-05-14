import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCYOQsDi427jlbkC09ogNH0lfv8rPPbxDw",
  authDomain: "estatein-bdf34.firebaseapp.com",
  projectId: "estatein-bdf34",
  storageBucket: "estatein-bdf34.appspot.com",
  messagingSenderId: "841985523894",
  appId: "1:841985523894:web:6b1cde2bc87e00f4b4a617",
  measurementId: "G-EGDXL69PMV"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();