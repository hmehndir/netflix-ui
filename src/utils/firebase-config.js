import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAsKLUa_Vk633iHCWG16pXF9mYfOnimAtk",
  authDomain: "netflix-clone-b3963.firebaseapp.com",
  projectId: "netflix-clone-b3963",
  storageBucket: "netflix-clone-b3963.appspot.com",
  messagingSenderId: "792048900565",
  appId: "1:792048900565:web:254ee1e9014ccc22f5055c",
  measurementId: "G-TMELN1BKVB"
};

const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);