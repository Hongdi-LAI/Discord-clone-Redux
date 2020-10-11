import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKjosFA__rHt_lwS9cCKE8Gm_3SJJvFWw",
  authDomain: "discord-clone-2b376.firebaseapp.com",
  databaseURL: "https://discord-clone-2b376.firebaseio.com",
  projectId: "discord-clone-2b376",
  storageBucket: "discord-clone-2b376.appspot.com",
  messagingSenderId: "1018406053626",
  appId: "1:1018406053626:web:5c595dfa08fbb18b258b43",
  measurementId: "G-FQ9GKX79MR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
