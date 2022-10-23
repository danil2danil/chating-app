import React, { useState } from 'react'
import { sendMessage } from '../../firebase/firebase-firestore'
import { InteractiveBtn } from '../InteractiveButton'
import './styles.scss'

export const MessageInput = ({ profileInfo, currentUser }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSendMessage = () => {
    const { imgLink, nickname } = profileInfo
    if (inputValue !== '') {
      sendMessage(nickname, imgLink, inputValue, currentUser)
        .then(() => setInputValue(''))
        .catch((error) => alert(error.code))
    }
  }

  const onKeyPressed = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className='message-form'>
      <input
        className='input'
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder='Напишите сообщение...'
        style={{ background: 'white', border: '1px solid gainsboro' }}
        onKeyDown={onKeyPressed}
      />
      <InteractiveBtn onClickFunc={handleSendMessage}>Отправить</InteractiveBtn>
    </div>
  )
}
