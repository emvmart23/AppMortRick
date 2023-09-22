import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { CharacterPersonContex } from '../../Counter/context'

const NavBar = () => {

  const { openMenu, setOpenMenu } = useContext(CharacterPersonContex) 

  const handleMenu = () => {
    setOpenMenu(state => !state)
  }

//   const menu = document.querySelector('.')
//   const  listLinks = document.querySelector('.container-list')

  const navLinks = [
    {
        id:1,
        href :'/',
        name: 'Home',
    },
    {
        id:2,
        href :'/favorite',
        name: 'Favorite',
    }
  ]

  return (
    <header className='bg-transparent w-full mb-20'>
        <nav className='u-center h-auto w-auto'>
            <div>
                <NavLink to='/' className='nav-logo'>{'{ MAX }'}</NavLink>
            </div>
            <button className='nav-button' onClick={() => handleMenu()}>
                {openMenu? (
                    <XMarkIcon className='text-[#e4d7c5] w-10 h-10' />
                ): (
                    <Bars3Icon className='text-[#e4d7c5] w-10 h-10'/>
                )}
            </button>
            <div className={`container-list ${openMenu ? 'isActive' : ''}`}>
                <ul>
                    {navLinks.map((item)=>(
                        <li key={item.id} className='m-2 nav-link'>
                            <NavLink to={item.href}>
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar
