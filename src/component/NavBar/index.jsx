import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile, CgMenuBoxed, CgHomeAlt } from 'react-icons/cg'
import './styles.scss'
import { InteractiveBtn } from '../InteractiveButton'
import { Logo } from '../Logo'
import { signOut, getAuth } from 'firebase/auth'
import { auth } from '../../firebase/firebase-initialize'


export const NavBar = () => {
  const handleSIgnOutCLick = () => {
    signOut(auth)
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
