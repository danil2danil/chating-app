import { getDocs, query, collection, doc, updateDoc, setDoc, getDoc, arrayUnion, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase-initialize'

const getProfileHeroesQuery = query(collection(db, 'profile_heroes'))
const getAllUsersQuery = query(collection(db, 'users'))


// получение всех героев 
export const getProfileHeroes = () => {
    return getDocs(getProfileHeroesQuery)
}

export const getAllUsers = () => {
    return getDocs(getAllUsersQuery)
}

// инициализация документа в баззе данных для после регистрации для профиля
export const setUserDataBaseInfo = (userUID, data) => {
    const docRef = doc(db, 'users', userUID)
    return setDoc(docRef, data)
}

// выбор героя для профиля
export const updateProfileHero = (userUID, { hero, img }) => {
    const userRef = doc(db, 'users', userUID)
    return updateDoc(userRef, { profileHero: hero, imgLink: img })
}


// получение информации о профиле профиля по уникальному номеру user
export const getUserDataBaseInfo = (userUID) => {
    const docRef = doc(db, 'users', userUID)
    return getDoc(docRef)
}
// получение информации о конкретном герое (имя, описание) по названию героя (название документа в firestore)  
export const getProfileHeroInfo = (hero) => {
    const docRef = doc(db, 'profile_heroes', hero)
    return getDoc(docRef)
}

// обновление информации о профиле в firebase (герой, никнейм)
export const updateUserDataBaseInfo = (userUID, field, newData) => {
    const docRef = doc(db, 'users', userUID)
    return updateDoc = (docRef, { [field]: newData })
}

export const getChatRoomData = () => {
    const chatRoomRef = doc(db, 'messenger', 'general_chat')
    return getDoc(chatRoomRef)
}

export const sendMessage = (nickname, imgLink, content, userUID) => {
    const docRef = doc(db, 'messenger', 'general_chat')
    const newMessage = { author: nickname, imgLink, content, date: new Date(), userUID, id: Math.random()}
    console.log(newMessage)
    return (
        updateDoc(docRef, {
            messages: arrayUnion(newMessage)
        })
    )
}

