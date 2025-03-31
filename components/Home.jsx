import React from 'react'
import "./Home.css";
import FirstSlider from '../subComponents/FirstSlider.jsx';
import CardCarousel from '../subComponents/CardCarousel.jsx';
import BankCarousel from '../subComponents/BankCarousel.jsx';
import LatestLaunch from '../subComponents/LatestLaunch.jsx';
import WhatsHot from '../subComponents/WhatsHot.jsx';
import Logoes from '../subComponents/Logoes.jsx';

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
