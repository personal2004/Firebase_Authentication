import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APP_API_KEY,
  authDomain:process.env.FIREBASE_APP_AUTH_DOMAIN,
  projectId: "authenticate-dc67e",
  storageBucket: "authenticate-dc67e.appspot.com",
  messagingSenderId: "194833074248",
  appId: "1:194833074248:web:49a45625036d72e67b707d",
  measurementId: "G-427RWPHT9E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);