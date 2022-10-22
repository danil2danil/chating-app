import React, { useState } from 'react'
import { sendMessage } from '../../firebase/firebase-firestore'
import { InteractiveBtn } from '../InteractiveButton'
import './styles.scss'

export const MessageInput = ({ profileInfo }) => {

  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSendMessage = () => {
    const { imgLink, nickname } = profileInfo
    sendMessage(nickname, imgLink, inputValue)
      .then(() => setInputValue(''))
      .catch((error) => alert(error.code))
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
      />
      <InteractiveBtn onClickFunc={handleSendMessage}>Отправить</InteractiveBtn>
    </div>
  )
}
