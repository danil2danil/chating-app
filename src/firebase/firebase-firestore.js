import { getDocs, query, collection } from 'firebase/firestore'
import { db } from './firebase-initialize'

const q = query(collection(db, 'profile_heroes'))

export const getProfileHeroes = async ()=>{
    return await getDocs(q)
}