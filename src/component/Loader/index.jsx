import React from 'react'
import './styles.scss'

export const Loader = () => {
  return (
    <div className='loader'>
        <div className="loader__inner">
            <img className='loader__img' src="images/heroes/loader.gif" alt="" />
            <h3 className="loader__txt">Загрузка...</h3>
        </div>
    </div>
  )
}
