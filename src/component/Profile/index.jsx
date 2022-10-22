import React, { useEffect, useState } from 'react'
import './styles.scss'
import { useSelector } from 'react-redux'
import { getProfileHeroInfo, getUserDataBaseInfo } from '../../firebase/firebase-firestore'
import { Loader } from '../Loader'
import { } from 'react-icons'
import { useGetProfileInfo } from '../../hooks/useGetProfileInfo'

export const Profile = () => {
  const isUserLoading = useSelector(state => state.user.isLoading)
  const currentUser = useSelector(state => state.user.user)
  const [isLoading, setIsLoading] = useState(true)

  const { profileInfo, heroInfo } = useGetProfileInfo(isUserLoading, currentUser, setIsLoading)
  const date = new Date(profileInfo.regTime?.toDate())

  return (
    <>
      {
        isLoading ?
          <Loader />
          :
          <div className='profile'>

            <div className="profile__inner">
              <img className='profile__avatar' src={`./images/heroes/${heroInfo.img}.jpg`} alt="profile_avatar" />
              <div className="profile__info">
                <h3 className='profile__info-txt'>
                  <span className='profile__info-field'>Ник: </span>{profileInfo.nickname}
                </h3>
                <h3 className='profile__info-txt'>
                  <span className='profile__info-field'>Эл.почтa: </span>{currentUser.email}
                </h3>
                <h3 className='profile__info-txt'>
                  <span className='profile__info-field'>Герой: </span>{heroInfo.name}
                </h3>
                <h3 className='profile__info-description'>{heroInfo.description}</h3>
                <h3 className='profile__info-txt'>
                  <span className='profile__info-time'>Зарегестрирован: {date.toDateString()}</span>
                </h3>
              </div>
            </div>
          </div>
      }
    </>

  )
}
