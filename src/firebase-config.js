
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSO-Y1-OzeZb59oY3thaftu9fxT0TraYc",
  authDomain: "my-food-ordering-9f90b.firebaseapp.com",
  projectId: "my-food-ordering-9f90b",
  storageBucket: "my-food-ordering-9f90b.appspot.com",
  messagingSenderId: "677831060256",
  appId: "1:677831060256:web:a1df4c9822556ee684c545",
  measurementId: "G-CZP51YVQ88"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);