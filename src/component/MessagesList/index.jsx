import React, { useRef, useEffect } from 'react'
import { Message } from '../Message'
import { Loader } from '../Loader'

export const MessagesList = ({  chatRoomData, isLoading, currentUser }) => {
  const listRef = useRef(null)
  const notification = new Audio('./audio/button-tonal_gydmp_eu.mp3')

  useEffect(() => {
    listRef.current.scrollTop += listRef.current.scrollHeight
    const length = chatRoomData?.messages.length
    if (!isLoading && chatRoomData.messages[length - 1].userUID !== currentUser.uid) {
      notification.play()
    }
  }, [chatRoomData])

  return (
    <div ref={listRef} className="chatroom__messages-list">
      {isLoading ?
        <Loader />
        :
        chatRoomData.messages.map(elem => {
          return (
            <Message key={elem.id} messageInfo={elem} currentUser={currentUser.uid} />
          )
        })
      }
    </div>
  )
}
