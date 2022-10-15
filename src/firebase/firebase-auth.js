import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "./firebase-initialize";
import { useDispatch } from 'react-redux'
import { setUser, setUserIsLoading } from "../reudx/profile";
import { useState, useEffect } from "react";


export function SignUp(email, pass) {
    return createUserWithEmailAndPassword(auth, email, pass)
}

export function SignIn(email, pass) {
    return signInWithEmailAndPassword(auth, email, pass)
}

export const SignOut = () => {
    return signOut(auth)
}

export const useCurentUser = () => {
    // const dispatch = useDispatch()
    // dispatch(setUserIsLoading(true))
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         dispatch(setUser(user.toJSON()))
    //         dispatch(setUserIsLoading(false))
    //     }
    //     // else {
    //     //     if(location !== '/sign_in' && location !== '/sign_up'){
    //     //         navigate('/sign_in')
    //     //     }
    //     // }
    // })
}
