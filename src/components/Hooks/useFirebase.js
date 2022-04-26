import { useEffect, useState } from 'react';
import firebaseInit from './firebaseConfig/firebase.init';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";

firebaseInit();

const useFirebase = () => {
    const auth = getAuth();
    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const [authNotice, setAuthNotice ] = useState(0)

    //registering new user into the application
    const registrationUser = (email, password)=>{
        setIsLoading( true )
        setAuthNotice(0)
        createUserWithEmailAndPassword( auth, email, password )
        .then((userCredential)=>{
            setAuthNotice(1)
            const user = userCredential.user;
            console.log( user )
        })
            
        .catch((error)=>{
            setAuthNotice(2)
            console.log( error.message )
        })
        .finally(()=>{
            setIsLoading( false )
        })
    }


    // Login user with email and password
    const LoginUser = ( email, password, willRemember= false ) =>{
        setAuthNotice(0)
        setIsLoading( true )
        signInWithEmailAndPassword( auth, email, password)
        .then((userCredential) => {
            setAuthNotice(1)
            const user = userCredential.user;
            setCurrentUser({ currentUser: user.email })

            if(willRemember){
                alert('will remember the user')
                localStorage.setItem('bcsJoyJatraUser', JSON.stringify( { currentUser: user.email } ))
            }
        })
        .catch((error)=>{
            setAuthNotice(2)
            
            const errorMessage = error.message;
            console.log(errorMessage);
        })
        .finally(()=>{
            setIsLoading( false )
        })
    } 

    // reset password with email 
    const resetPassword = ( email )=>{
        setAuthNotice(0)
        setIsLoading( true )
        sendPasswordResetEmail( auth, email )
        .then(()=>{
            alert('Please check your email for reset password')
            setAuthNotice(1)
        })
        .catch((error)=>{
            setAuthNotice(2)
            const errorMessage = error.message;
            alert( errorMessage )
        })
        .finally(()=>{
            setIsLoading( false )
        })
    }

    console.log( currentUser )

    //current user observer =========================
    useEffect(()=>{  
        const unsubscribed = onAuthStateChanged(auth ,(user) => {
                if(user){
                    setCurrentUser({ currentUser: user.email })  //  if user not rememberable but authorized, set the current user state
                }
                else{
                    if(JSON.parse( localStorage.getItem('bcsJoyJatraUser'))){
                        setCurrentUser(JSON.parse( localStorage.getItem('bcsJoyJatraUser')))  // setup user state from local storage
                    }
                    else{
                        setCurrentUser({}) // making user state empty if something wrong
                    }
                }
            })
        return () => unsubscribed;
    },[auth])





    return {
      registrationUser,
      LoginUser,
      resetPassword,
      setAuthNotice,
      isLoading,
      authNotice,
    };
};

export default useFirebase;