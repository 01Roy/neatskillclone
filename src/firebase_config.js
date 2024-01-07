import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCq1OoLWDKTyr6e0tovxUyl2rmQ0dlFFEs",
    authDomain: "neatskill-b9731.firebaseapp.com",
    projectId: "neatskill-b9731",
    storageBucket: "neatskill-b9731.appspot.com",
    messagingSenderId: "678922452089",
    appId: "1:678922452089:web:810c2fdd7f11e8edf968a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider }
