import React, { useState, useEffect } from 'react'
import './styles.scss'
import { getProfileHeroes, updateProfileHero } from '../../firebase/firebase-firestore';
import { HeroCard } from '../HeroCard';
import { InteractiveBtn } from '../InteractiveButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const ProfileCastomizationForm = () => {
  const [heroesCards, setHeroesCards] = useState([])
  const [chosedHero, setChosedHero] = useState({})
  const currentUser = useSelector(state => state.user.user)
  const navigate = useNavigate()

  const choseHeroFunc = (hero, img) => {
    setChosedHero({hero, img})
  }

  const handleSubmitChose = () => {
    updateProfileHero(currentUser.uid, chosedHero)
      .then(
        navigate('/')
      )
      .catch(error => {
        alert(error.message)
      })
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
              isHeroChosed={chosedHero.hero === card.id ? true : false}
              choseHeroFunc={choseHeroFunc}
            />
          )
        })}
      </div>
      <p className="heroes__message">*Ты сможешь изменить свой выбор в любой момент на странице своего профиля</p>
      <div className="heroes__submit-btn">
        <InteractiveBtn onClickFunc={handleSubmitChose}>Подтвердить выбор</InteractiveBtn>
      </div>
    </div>
  )
}
