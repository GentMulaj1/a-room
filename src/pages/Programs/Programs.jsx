import React from 'react'
import './Programs.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Header from '../../component/Header';
import Footer from '../../component/Footer';

const Programs = () => {   
  return (
    <>
    <div className='programs'>
        <div className="wrapper programs__content">
            <div className='programs__FirstLeft'>
                <div className="programs__left" id='clients'>
                    <h1>01</h1>
                    <h4>Gerald winefield motion art director</h4>
                    <div className='programs__btns'>
                        <a href="#" className='btn__left'><KeyboardArrowLeftIcon/></a>
                        <a href="#" className='btn__right'><KeyboardArrowRightIcon/></a>
                    </div>
                </div>

                <div className="programs__right">
                    <h1>Inspire, delight & educate</h1>
                    <h4>that is large enough for several people to move about, and whose size, fixtures, the activity to be conducted.</h4>
                    <p id='programs__line'></p>
                </div>
            </div>

            <div className='programs__FirstRight'>
                <p id='programs__lineRight'></p>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div className="wrapper programs__second" id='aboutus'>
            <div className="second__left" >
                <h1>They talk about us</h1>
                <h2>our a-room and stop project have more than 500 million usd date</h2>
                <button>Learn more</button>
            </div>
            
            <div className="second__right">
                <a href="#">01 / 05</a>
                <div className='programs__btns'>
                    <a href="#" className='btn__left'><KeyboardArrowLeftIcon/></a>
                    <a href="#" className='btn__right'><KeyboardArrowRightIcon/></a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Programs