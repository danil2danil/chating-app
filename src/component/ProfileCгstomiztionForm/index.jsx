import React, { useState, useEffect } from 'react'
import './styles.scss'
import { getProfileHeroes } from '../../firebase/firebase-firestore';
import { HeroCard } from '../HeroCard';


export const ProfileCastomizationForm = () => {
  const [heroesCards, setHeroesCards] = useState([])
  const [chosedHero, setChosedHero] = useState("")

  const choseHeroFunc = (hero) => {
    setChosedHero(hero)
  }

  useEffect(() => {
    getProfileHeroes()
      .then(result => {
        setHeroesCards(result.docs)
      })
  }, []);

  return (
    <div className='heroes'>
      <h1 className="heroes__title">Выбери своего героя</h1>
      <div className="heroes__inner">
        {heroesCards.map(card => {
          const { name, description, img } = card.data()
          return (
            <HeroCard
              key={card.id}
              heroName={name}
              heroDescription={description}
              heroImgLink={img}
              heroID={card.id}
              isHeroChosed={chosedHero === card.id ? true : false}
              choseHeroFunc={choseHeroFunc}
            />
          )
        })}
      </div>
    </div>
  )
}
