import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../Input';
import { InteractiveBtn } from '../../InteractiveButton';
import { Logo } from '../../Logo';
import '../styles.scss'
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase-initialize';
import { setUser } from '../../../reudx/profile';


export const SignUpForm = () => {
  const dispatch = useDispatch()
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
    createUserWithEmailAndPassword(auth, handleUserInf.email, handleUserInf.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        alert(error.code)
      });
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