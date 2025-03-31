import React from 'react'
import "./Home.css";
import FirstSlider from '../subComponents/FirstSlider';
import CardCarousel from '../subComponents/cardCarousel';
import BankCarousel from '../subComponents/BankCarousel';
import LatestLaunch from '../subComponents/LatestLaunch';
import WhatsHot from '../subComponents/WhatsHot';
import Logoes from '../subComponents/Logoes';

const Home = () => {

  return (
    <div className="home-container">
      <div className="home-carousel">
        <FirstSlider />
      </div>
      <div className="card-carousel">
        <CardCarousel />
      </div>
      <div className='bank-carousel'>
        <BankCarousel />
      </div>
      <div className='latestLaunch-carousel'>
        <LatestLaunch />
      </div>
      <div className='latestLaunch-carousel'>
        <WhatsHot />
      </div>
      <div className='latestLaunch-carousel'>
        <Logoes />
      </div>
    </div>
  );
};

export default Home;
