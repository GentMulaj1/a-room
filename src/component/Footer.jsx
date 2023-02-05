import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Footer() {
  return (
    <div className='footer' id='contact'>
       <div className="wrapper header__content footer__content">
            <nav className='footer__nav'>
                <div className='header__logo'>
                    <p>A-<span>ROOM</span></p>
                </div>

                <ul className=' footer__mainMenu'>
                  <p id='copy'>&copy; 2023 Gent Mulaj</p>
                </ul>

                <ul className="footer__social">
                  <li><a href="#"><FacebookIcon/></a></li>
                  <li><a href="#"><InstagramIcon/></a></li>
                  <li><a href="#"><TwitterIcon/></a></li>
                  <li><a href="#"><YouTubeIcon/></a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Footer