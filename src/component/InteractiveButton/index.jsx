import React from 'react'
import './styles.scss'

export const InteractiveBtn = ({children, onClickFunc}) => {
  return (
    <button className="interactive-btn" onClick={onClickFunc}>
      {children}
    </button>
  )
}
