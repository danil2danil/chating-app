import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../Input';
import { InteractiveBtn } from '../../InteractiveButton';
import { Logo } from '../../Logo';
import '../styles.scss'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth } from '../../../firebase/firebase-initialize';




export const SignInForm = () => {
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

  const handleSubmitClick = async () => {
    signInWithEmailAndPassword(auth, handleUserInf.email, handleUserInf.password)
      .then(() => { navigate('/') })
      .catch((error) => {
        alert(error.message)
      });
  }

  return (
    <>
      <div className='auth'>
        <div className="auth__logo">
          <Logo />
        </div>
        <div className="auth__inner">
          <h3 className='auth__title'>Вход</h3>
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
              <Link to='/sign_up'>Создать новый аккаунт</Link>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
