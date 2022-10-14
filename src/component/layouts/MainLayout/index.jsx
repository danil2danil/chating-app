import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../../NavBar'
import './styles.scss'

export const MainLayout = () => {
  return (
    <div className='layout'>
      <div className="layout__nav">
        <NavBar />
      </div> 
      <div className="layout__content">
        <Outlet />
      </div>
    </div>
  )
}
