
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_iHTkmZgwNw1WVv2_vVpfijn_jUamyMU",
  authDomain: "perspective-530cf.firebaseapp.com",
  projectId: "perspective-530cf",
  storageBucket: "perspective-530cf.appspot.com",
  messagingSenderId: "331217465080",
  appId: "1:331217465080:web:d3196ded06507827d5d50d"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export {auth, db}