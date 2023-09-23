import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { CharacterPersonContex } from '../../Counter/context';

const NavBar = () => {
  const { openMenu, setOpenMenu } = useContext(CharacterPersonContex);
  const activeStyle = 'underline underline-offset-4'

  const handleMenu = () => {
    setOpenMenu((state) => !state);
  };

  window.addEventListener('resize', () => {
    if(window.innerWidth > 600){
      setOpenMenu(false)
    }
  })
  
  const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '/'
    },
    {
      id: 2,
      name: 'Favorite',
      href: '/favorite'
    },
  ];

  return (
    <header className='bg-transparent w-full'>
      <nav className='u-center h-auto w-auto flex justify-between items-center'>
        <div>
          <NavLink to='/' className='nav-logo'>
            {'{ MAX }'}
          </NavLink>
        </div>
        <button className='nav-button' onClick={() => handleMenu()}>
          {openMenu ? (
            <XMarkIcon className='text-[#e4d7c5] w-10 h-10' />
          ) : (
            <Bars3Icon className='text-[#e4d7c5] w-10 h-10' />
          )}
        </button>
        <div className={`container-list ${openMenu ? 'isActive' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id} className='m-2 nav-link'>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
