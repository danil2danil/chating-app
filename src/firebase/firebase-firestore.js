import { async } from '@firebase/util'
import { getDocs, query, collection, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore'
import { db } from './firebase-initialize'

const getProfileHeroesQuery = query(collection(db, 'profile_heroes'))

export const getProfileHeroes = ()=>{
    return getDocs(getProfileHeroesQuery)
}

export const setUserDataBaseInfo = (userUID, data) => {
    const docRef = doc(db, 'users', userUID)
    return setDoc(docRef, data) 
}
export const updateProfileHero = (userUID, hero)=>{
    const userRef = doc(db, 'users', userUID) 
    return updateDoc(userRef, {profileHero: hero})
}



export const getUserDataBaseInfo = (userUID)=>{
    const docRef = doc(db, 'users', userUID)
    return getDoc(docRef)
}
export const getProfileHeroInfo = (hero)=>{
    const docRef = doc(db, 'profile_heroes', hero)
    return getDoc(docRef)
}


export const updateUserDataBaseInfo = (userUID, field, newData)=>{
    const docRef = doc(db, 'users', userUID)
    return updateDoc = (docRef, {[field]: newData})
}

