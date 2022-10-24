// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLP1QgCr3UV32iIt7C1Kto7bM6KmseXwk",
  authDomain: "perfect-period-364415.firebaseapp.com",
  projectId: "perfect-period-364415",
  storageBucket: "perfect-period-364415.appspot.com",
  messagingSenderId: "468675497403",
  appId: "1:468675497403:web:4bc5e52ffbde365daf489e",
  measurementId: "G-QQETMJR89T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);