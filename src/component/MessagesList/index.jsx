import React, { useRef, useEffect } from 'react'
import { Message } from '../Message'
import { Loader } from '../Loader'

export const MessagesList = ({ messages, isLoading, currentUser }) => {
  const listRef = useRef(null)
 
  useEffect(()=>{
    console.log(listRef.current.scrollHeight)
    console.log(listRef.current.scrollTop)
    listRef.current.scrollTop += listRef.current.scrollHeight 
  }, [messages])

  return (
    <div ref={listRef} className="chatroom__messages-list">
      {isLoading ?
        <Loader />
        :
        messages.messages.map(elem => {
          return (
            <Message key={elem.id} messageInfo={elem} currentUser={currentUser.uid} />
          )
        })
      }
    </div>
  )
}
