import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCf969ZOE_zfDd2dtO-pSBnyYzIjk6zA5A",
    authDomain: "wealthify-dfd1e.firebaseapp.com",
    databaseURL: "https://wealthify-dfd1e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wealthify-dfd1e",
    storageBucket: "wealthify-dfd1e.appspot.com",
    messagingSenderId: "68766873264",
    appId: "1:68766873264:web:ca036abcb5037c5d56ed75",
    measurementId: "G-VG7BDRB6Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);