// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPE15LOxMap7mUc9__A1oG4IN9H5mdR_I",
  authDomain: "webshop-17353.firebaseapp.com",
  projectId: "webshop-17353",
  storageBucket: "webshop-17353.appspot.com",
  messagingSenderId: "974988495292",
  appId: "1:974988495292:web:796f34569443949c0f43b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {
db,
auth,
}

