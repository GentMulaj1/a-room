import React from 'react'
import './Home.css'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Footer from '../../component/Footer';
import Header from '../../component/Header';

const Home = () => {    
  return (
    <>
        <div className='home' id='home'>
            <div className="wrapper home__content">
            <div className="home__left">
                <h1>Create your custom workspace.</h1>
                <p>in a building or large vehicle, like a ship, a room to which entry</p>
                <div className='home__buttons'>
                    <div className='home__btn'>
                        <a href="#"><SettingsSuggestIcon/></a>
                        <div>
                            <h3>UPGRADEABLE</h3>
                            <p>1-3 Level</p>     
                        </div>
                    </div>

                    <div className='home__btn'>
                        <a href="#"><LocalAtmIcon/></a>
                        <div>
                            <h3>0.417%</h3>
                            <p>monthly income rate</p>     
                        </div>
                    </div>
                </div>
            </div>

            <div className="home__right"></div>
            </div>
        </div>
    </>
  )
}

export default Home