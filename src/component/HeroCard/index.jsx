import React, { useState } from 'react'
import './styles.scss'

export const HeroCard = ({heroImgLink, heroName, heroDescription, heroID, isHeroChosed, choseHeroFunc}) => {

  const handleChose = ()=> {
    choseHeroFunc(heroID, heroImgLink)
  }

  return (
    <div className='hero' onClick={handleChose}>
      <div className= {isHeroChosed ? 'hero__checked-mask active' : 'hero__checked-mask'}>
      </div>
      <div className="hero__inner">
        <img className="hero__img" src={`./images/heroes/${heroImgLink}.jpg`} />
        <div className="hero__box">
          <h2 className="hero__name">{heroName}</h2>
          <p className="hero__description">{heroDescription}</p>
        </div>
      </div>
    </div>
  )
}
