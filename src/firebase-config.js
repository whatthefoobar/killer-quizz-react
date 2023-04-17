import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmIkqG14gdj6X5G7lqGnRhexqH9bQoE78",
  authDomain: "quizz-b6106.firebaseapp.com",
  projectId: "quizz-b6106",
  storageBucket: "quizz-b6106.appspot.com",
  messagingSenderId: "320183610957",
  appId: "1:320183610957:web:84331f0dc3cdfe3d227604",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
