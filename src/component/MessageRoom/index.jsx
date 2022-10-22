import { onSnapshot, doc } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/firebase-initialize'
import './styles.scss'
import { useGetProfileInfo } from '../../hooks/useGetProfileInfo'
import { useSelector } from 'react-redux'
import { Loader } from '../Loader'
import { MessageInput } from '../MessageInput'


export const MessageRoom = () => {
  const [chatRoomData, setChatRoomData] = useState()
  const chatRoomRef = doc(db, 'messenger', 'general_chat')
  const isUserLoading = useSelector(state => state.user.isLoading)
  const currentUser = useSelector(state => state.user.user)
  const [isLoading, setIsLoading] = useState(true)

  const { profileInfo } = useGetProfileInfo(isUserLoading, currentUser, setIsLoading)


  useEffect(() => {
    const unsub = onSnapshot(chatRoomRef, {
      next: (chatRoomSnapshot) => {
        setChatRoomData(chatRoomSnapshot.data())
      },
      error: (error) => {
        alert(error.message)
      }
    })
    return unsub
  }, [])

  return (
    <div className='chatroom'>
      <div className="chatroom__header">
        <h3 className="chatroom__title">
          Бездна
        </h3>
        <div className="chatroom__subtitles">
          <p className="chatroom__subtitle">Участников: </p>
          <p className="chatroom__subtitle">Всего сообщений: {chatRoomData?.messages.length}</p>
        </div>
      </div>
      <div className="chatroom__body">
        <div className="chatroom__messages-list">
          {/* Считывание массива сообжений*/}
        </div>
        <div className="chatroom__input">
          <MessageInput profileInfo={profileInfo} />
        </div>
      </div>
    </div>
  )
}
