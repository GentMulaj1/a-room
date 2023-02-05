import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'

const Header = () => {

    window.onload=function(){
        const mainMenu = document.querySelector('.mainMenu');
        const closeMenu = document.querySelector('.closeMenu');
        const openMenu = document.querySelector('.openMenu');
    
        openMenu.addEventListener('click', show);
        closeMenu.addEventListener('click', close);
    
        function show() {
            mainMenu.style.display = 'flex';
            mainMenu.style.top = '0';
        }

        function close() {
            mainMenu.style.top = '-100%';
        }
    
    
      }

      return (
    <div className='header'>
        <div className="wrapper header__content">
            <nav>
                <div className='header__logo'>
                    <p>A-<span>ROOM</span></p>
                </div>

                <div className="openMenu"> <MenuIcon /> </div>
                
                <ul className='mainMenu'>
                    <li>
                        <Link onClick="closeMenu" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link onClick="closeMenu" to='service'>Service</Link>
                    </li>
                    <li>
                        <Link onClick="closeMenu" to='blog'>Blog</Link>
                    </li>
                    <li>
                        <Link onClick="closeMenu" to='programs'>Clients</Link>
                    </li>

                    <div className="closeMenu"><CloseIcon/></div>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header