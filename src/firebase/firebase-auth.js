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

export function SigOut() {
    signOut(auth)
}

export const useCurentUser = () => {
    const dispatch = useDispatch()
    // const location = useLocation()
    // const navigate = useNavigate()
    dispatch(setUserIsLoading(true))
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUser(user.toJSON()))
            dispatch(setUserIsLoading(false))
        }
    })
}
