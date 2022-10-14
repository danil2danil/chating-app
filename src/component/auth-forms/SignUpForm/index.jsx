import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { SignUp } from '../../../firebase/firebase-auth';
import { Input } from '../../Input';
import { InteractiveBtn } from '../../InteractiveButton';
import { Logo } from '../../Logo';
import '../styles.scss'


export const SignUpForm = () => {
  const navigate = useNavigate()
  const [handleUserInf, sethandleUserInf] = useState({
    email: null,
    password: null,
  });

  const handleUserInfChange = (field, data) => {
    sethandleUserInf((current) => {
      const temp = { ...current }
      temp[field] = data
      return temp
    })
  }

  const handleSubmitClick = () => {
    SignUp(handleUserInf.email, handleUserInf.password)
      .then(res => {
        console.log(res.user)
        navigate('/profile')
      })
  }

  return (
    <>
      <div className='auth'>
        <div className="auth__logo">
          <Logo />
        </div>
        <div className="auth__inner">
          <h3 className='auth__title'>Регистрация</h3>
          <div className="auth__input">
            <Input types='email' placeholder='Адрес эл.почты' onChangeFunc={handleUserInfChange} changebleValue='email' />
          </div>
          <div className="auth__input">
            <Input types='password' placeholder='Пароль' onChangeFunc={handleUserInfChange} changebleValue='password' />
          </div>
          <div className="auth__buttons">
            <InteractiveBtn onClickFunc={handleSubmitClick}>
              Подтвердить
            </InteractiveBtn>
            <div className="auth__buttons-link">
              <Link to='/sign_in'>Войти в существующий аккаунт</Link>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}