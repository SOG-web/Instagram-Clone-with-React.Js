import { initializeApp } from "firebase/app";
import { getFirestore, FieldValue } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCQSz_QYHDdMZ2tfa67hkJxoHzw9VpWfI",
  authDomain: "instagram-clone-react-9b2d1.firebaseapp.com",
  projectId: "instagram-clone-react-9b2d1",
  storageBucket: "instagram-clone-react-9b2d1.appspot.com",
  messagingSenderId: "664907300440",
  appId: "1:664907300440:web:73210cfa58c629ada5542d",
  measurementId: "G-5YKS7PKT76",
};

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export { firebase, FieldValue };
