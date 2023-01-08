// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGLCWLVfc4sZpSYiQ02b6e6Y_c2Kbr1ME",
    authDomain: "momentum-897aa.firebaseapp.com",
    projectId: "momentum-897aa",
    storageBucket: "momentum-897aa.appspot.com",
    messagingSenderId: "628879920172",
    appId: "1:628879920172:web:c657261ac654c923d35589"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;