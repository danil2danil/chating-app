import React from 'react'
import './styles.scss'

export const Message = ({messageInfo, currentUser}) => {
    const { author, content, imgLink, date, userUID } = messageInfo
    const messageDate = new Date(date?.toDate())
  return (
    <div className={currentUser === userUID ? 'message currentUser' : 'message'}>
        <img className="message__avatar" src={`./images/heroes/${imgLink}.jpg`} alt="" />
        <div className="message__body">
            <h4 className="message__author">{author}</h4>
            <p className="message__content">
                {content}
            </p>
            <div className="message__date">
                <p className="message__d">{messageDate.toLocaleDateString()}</p>
                <p className="message__time">{messageDate.getHours()}:{messageDate.getMinutes()}</p>
            </div>
        </div>
    </div>
  )
}
