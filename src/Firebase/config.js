import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTdi2lTw8WGGPkk8cXFxo2jAFpwDS7jLk",
  authDomain: "blog-db652.firebaseapp.com",
  databaseURL: "https://blog-db652-default-rtdb.firebaseio.com",
  projectId: "blog-db652",
  storageBucket: "blog-db652.appspot.com",
  messagingSenderId: "1010395290736",
  appId: "1:1010395290736:web:4e69cc71785d4ed7c0e8b5"
};

initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth();

export { db, auth };