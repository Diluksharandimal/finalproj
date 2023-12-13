// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS9rmOOLMFnilWHTeLDVKXvBz-uhEV1V8",
  authDomain: "reactproject-33cb9.firebaseapp.com",
  projectId: "reactproject-33cb9",
  storageBucket: "reactproject-33cb9.appspot.com",
  messagingSenderId: "149099521705",
  appId: "1:149099521705:web:03d621622d4a81163dabb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
