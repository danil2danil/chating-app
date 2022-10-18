import React, { useEffect } from 'react'
import './styles.scss'
import { useSelector } from 'react-redux'
import { getAuth } from 'firebase/auth'

export const Profile = () => {
  const isUserLoading = useSelector(state=>state.user.isLoading)
  const currentUser = useSelector(state=>state.user.user)
  
   return (
    <div>
      {
        isUserLoading ?
          <p>ЗАГРУЗКА</p>
          :
          <p>{currentUser.email}</p>
      }
    </div>
  )
}
