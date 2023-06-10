import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.confige";
import Swal from "sweetalert2";




export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider =new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true);
        return  signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    //  google log in

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  
            setUser(loggedUser);
        })
        .catch(error => console.log(error))
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log("currentUser", currentUser);
            setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        handleGoogleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;