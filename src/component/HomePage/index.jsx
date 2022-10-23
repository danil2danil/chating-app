import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InteractiveBtn } from '../InteractiveButton'
import './styles.scss'
export const HomePage = () => {

  const navgate = useNavigate()

  const onClickFunc = () => {
    navgate('message_room')
  }

  return (
    <div className='home'>
      <h2 className="home__greetings">
        Добро пожаловать на
      </h2>
      <h1 className="home__title">
        BezBabs
      </h1>
      <div className="home__inner">
        <div className="home__card">
          <div className="home__card-inner">
            <h3 className="home__card-title">Хорошее общение</h3>
            <p className="home__card-deckription">Веб-приложение исключительно для малого круга людей. Тотальная анонимность и ничего лишнего. Тут ны найдешь хорошее общение и поддержку. Заходи в чат и общайся. Тут ты можешь поделиться своими проблемами, получить совет и помощь. Тут рады каждому.</p>
          </div>
          <img className="home__card-img" src="./images/heroes/main-img.webp" alt="" />
        </div>
      </div>
      <div className="home__card-link">
        <InteractiveBtn onClickFunc={onClickFunc}>Перейти в чат</InteractiveBtn>
      </div>
    </div>
  )
}
