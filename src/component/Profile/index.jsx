import React, { useEffect, useState } from 'react'
import './styles.scss'
import { useSelector } from 'react-redux'
import { getProfileHeroes, getProfileHeroInfo, getUserDataBaseInfo } from '../../firebase/firebase-firestore'
import { Loader } from '../Loader'

export const Profile = () => {
  const isUserLoading = useSelector(state => state.user.isLoading)
  const currentUser = useSelector(state => state.user.user)
  const [profileInfo, setProfileInfo] = useState({})
  const [heroInfo, setHeroInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)

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
              console.log("Pfuhepbkjcm")
              setIsLoading(false)
            })
        })
    }
  }, [isUserLoading, currentUser])


  return (
    <div className='profile'>
      {
        isLoading ?
          <Loader />
          :
          <div className="profile__inner">
            <img className='profile__avatar' src={`./images/heroes/${heroInfo.img}.jpg`} alt="profile_avatar" />
            <div className="profile__info">
              <h3 className='profile__info-txt'>{profileInfo.nickname}</h3> {/*ДОБАВИТЬ КНОПКУ ИЗМЕНЕНИЯ НИКА*/}
              <h3 className='profile__info-txt'>{currentUser.email}</h3>
              <h3 className='profile__info-description'>{heroInfo.description}</h3>
              <h3 className="profile__info-achievements">Разблокированнные достижения: </h3>
            </div>
          </div>
      }
    </div>
  )
}
