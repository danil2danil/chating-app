import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getProfileHeroInfo, getUserDataBaseInfo } from '../firebase/firebase-firestore'

export const useGetProfileInfo = (isUserLoading, currentUser, setIsLoading) => {
    const [profileInfo, setProfileInfo] = useState({})
    const [heroInfo, setHeroInfo] = useState({})

    useEffect(() => {
        if (!isUserLoading) {
            setIsLoading(true)
            getUserDataBaseInfo(currentUser.uid)
                .then(res => {
                    const result = res.data()
                    setProfileInfo(result)
                    return result
                })
                .then((result) => {
                    getProfileHeroInfo(result.profileHero)
                        .then(res => {
                            setHeroInfo(res.data())
                            setIsLoading(false)
                        })
                })
        }
    }, [isUserLoading, currentUser])

    return {profileInfo, heroInfo}
}