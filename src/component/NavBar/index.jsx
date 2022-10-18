import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CgProfile, CgMenuBoxed, CgHomeAlt } from 'react-icons/cg'
import './styles.scss'
import { InteractiveBtn } from '../InteractiveButton'
import { Logo } from '../Logo'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase-initialize'
import { useDispatch } from 'react-redux'
import { setUser } from '../../reudx/profile'

export const NavBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  const handleSIgnOutCLick = () => {
    signOut(auth)
      .then(
        dispatch(setUser({}))
      )
  }

  return (
    <nav className='navigation'>
      <Logo />
      <div className="navigation__inner">
        <NavLink className="navigation__item" to='/'>
          <CgHomeAlt className='navigation__item-ico' />
        </NavLink>
        <NavLink className="navigation__item" to='profile'>
          <CgProfile className='navigation__item-ico' />
        </NavLink>
        <NavLink className="navigation__item" to='message_room'>
          <CgMenuBoxed className='navigation__item-ico' />
        </NavLink>
      </div>
      <div className="navigation__btn">
        <InteractiveBtn onClickFunc={handleSIgnOutCLick}>Выйти</InteractiveBtn>
      </div>
    </nav>
  )
}
