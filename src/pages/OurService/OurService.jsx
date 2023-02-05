import React from 'react'
import './OurService.css'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TuneIcon from '@mui/icons-material/Tune';
import PaymentsIcon from '@mui/icons-material/Payments';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import Footer from '../../component/Footer';
import Header from '../../component/Header';

const OurService = () => {
  return (
    <>
    <div className='ourService' id='service'>
        <div className="wrapper ourService__content">
            <h1 id='ourService__h1'>OUR SERVICE</h1>
            <div className="ourService__cards">
                <div className="ourService__card">
                    <a href="#"><MenuIcon/></a>
                    <h3>Custom room blockchain</h3>
                    <a href="#"><KeyboardArrowRightIcon/></a>
                </div>

                <div className="ourService__card">
                    <a href="#"><TuneIcon/></a>
                    <h3>BLOCKCHAIN consulation</h3>
                    <a href="#"><KeyboardArrowRightIcon/></a>
                </div>

                <div className="ourService__card">
                    <a href="#"><PaymentsIcon/></a>
                    <h3>enterprise room consulation</h3>
                    <a href="#"><KeyboardArrowRightIcon/></a>
                </div>

                <div className="ourService__card">
                    <a href="#"><QrCodeScannerIcon/></a>
                    <h3>A-ROOM BLOCKCHAIN</h3>
                    <a href="#"><KeyboardArrowRightIcon/></a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OurService