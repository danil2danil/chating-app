import { onSnapshot, doc } from 'firebase/firestore'
import React, { useState, useEffect, useRef } from 'react'
import { db } from '../../firebase/firebase-initialize'
import './styles.scss'
import { useGetProfileInfo } from '../../hooks/useGetProfileInfo'
import { useSelector } from 'react-redux'
import { Loader } from '../Loader'
import { MessageInput } from '../MessageInput'
import { Message } from '../Message'
import { MessagesList } from '../MessagesList'


export const MessageRoom = () => {
  const [chatRoomData, setChatRoomData] = useState()
  const chatRoomRef = doc(db, 'messenger', 'general_chat')
  const isUserLoading = useSelector(state => state.user.isLoading)
  const currentUser = useSelector(state => state.user.user)
  const [isLoading, setIsLoading] = useState(true)
  const { profileInfo } = useGetProfileInfo(isUserLoading, currentUser, setIsLoading)
  const windowRef = useRef()


  useEffect(() => {
    setIsLoading(true)
    const unsub = onSnapshot(chatRoomRef, {
      next: (chatRoomSnapshot) => {
        setChatRoomData(chatRoomSnapshot.data())
        console.log(chatRoomSnapshot.data())
        setIsLoading(false)
      },
      error: (error) => {
        alert(error.message)
      }
    })
    return unsub
  }, [])

  return (
    <>
      {
        isUserLoading ?
          <Loader />
          :
          <div className='chatroom'>
            <div className="chatroom__header">
              <h3 className="chatroom__title">
                Бездна
              </h3>
              <div className="chatroom__subtitles">
                <p className="chatroom__subtitle">Всего сообщений: {chatRoomData?.messages.length}</p>
              </div>
            </div>
            <div className="chatroom__body">
              <MessagesList chatRoomData={chatRoomData} isLoading={isLoading} currentUser={currentUser} />
              <div className="chatroom__input">
                <MessageInput profileInfo={profileInfo} currentUser={currentUser.uid} />
              </div>
            </div>
          </div>
      }
    </>
  )
}
