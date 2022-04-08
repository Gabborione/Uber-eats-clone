import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDw0QsGPeMnA8MIiIpm8-tX7f4_ywkhDkc",
  authDomain: "rn-uber-eats-clone-1.firebaseapp.com",
  projectId: "rn-uber-eats-clone-1",
  storageBucket: "rn-uber-eats-clone-1.appspot.com",
  messagingSenderId: "143093428530",
  appId: "1:143093428530:web:f93e290ac178030356e72b",
};

initializeApp(firebaseConfig);

export default firebase;
