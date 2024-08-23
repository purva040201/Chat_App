import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-jpQnN0wHdhbv0VYmGg6dmJSyISJEDKs",
  authDomain: "chat-app-gs-d866a.firebaseapp.com",
  projectId: "chat-app-gs-d866a",
  storageBucket: "chat-app-gs-d866a.appspot.com",
  messagingSenderId: "897644749629",
  appId: "1:897644749629:web:87bfc204ca77d272cd1b54",
  measurementId: "G-MMQE940NR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (username, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "Hey there, I am using chatapp",
            lastSeen: Date.now()
        });

        await setDoc(doc(db, "chats", user.uid), {
            chatsData: []
        });

        toast.success("Account created successfully!");
    } catch (error) {
        console.error("Error during signup: ", error);
        toast.error(error.message);
    }
};

// Login function
const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully!");
    } catch (error) {
        console.error("Error during login: ", error);
        toast.error(error.message);
    }
};

const logout = async ()=>{
    try{
        await signOut(auth)

    }catch(error){
        console.error(error);
        toast.error(error.code.split('/')[1].split('.').join(" "));

    }
    
}

export { signup, login ,logout,auth,db };
