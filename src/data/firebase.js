import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQ_l-jVhq1T32E2NvqmCz9DJOpUO2QKro",
    authDomain: "tender-clone-45e30.firebaseapp.com",
    projectId: "tender-clone-45e30",
    storageBucket: "tender-clone-45e30.appspot.com",
    messagingSenderId: "830055640192",
    appId: "1:830055640192:web:cb20a561261803ba8cca65",
    measurementId: "G-T42454MZ2C"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);
export default database;







