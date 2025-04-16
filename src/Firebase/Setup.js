import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { getFirestore ,collection, addDoc} from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4GILSGDouUCSh7MbFRYbzmxGKg4kkQQk",
  authDomain: "doc-app-b89e0.firebaseapp.com",
  projectId: "doc-app-b89e0",
  storageBucket: "doc-app-b89e0.firebasestorage.app",
  messagingSenderId: "818778023609",
  appId: "1:818778023609:web:bf2b88a86b779237291d68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

//create function User in signup
const signup = async (email, password, name) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,   // uid is user id  
       name,
       authProvider: "local",
       email,
     
    }); 
  } 
  
  catch (error) { 
    console.log(error);
    // alert(error);
   toast.error(error.code.split("/")[1].split("-").join(" ")); // remove the unnecessary characters word in error message text
  }
};

//create function User in login

const login = async (email, password) => {

    try 
    {
       await signInWithEmailAndPassword(auth, email, password);
    } 
    catch (error)
    {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
        // alert(error);
    }
};
// create function User in logout
const logout = async () => {
    signOut(auth);
}
//export signup, login, logout db, auth
export { auth, db, signup, login, logout};