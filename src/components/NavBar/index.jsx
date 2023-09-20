import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const [ openMenu, setOpenMenu] = useState(false)

  const handleMenu = () => {
    setOpenMenu(state => !state)
  }

  return (
    <header className='bg-transparent w-full mb-20'>
        <nav className='u-center h-auto w-auto'>
            <div>
                <NavLink to='/' className='text-2xl'>{'{ MAX }'}</NavLink>
            </div>
            <button className='nav-button' onClick={() => handleMenu()}>
                {openMenu? (
                    <CloseIcon sx={{ width:25, height:23}}/>
                ): (
                    <MenuIcon sx={{ width:25, height:23}}/>
                )}
            </button>
            <div className={`container-list ${openMenu ? 'isActive' : ''}`}>
                <ul className=''>
                    <li className='m-2'>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className='m-2'>
                        <NavLink to='/favorite'>
                            Favorite
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar