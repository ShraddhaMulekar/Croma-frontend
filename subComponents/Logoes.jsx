import React, { useEffect, useState } from 'react'
import "./Logoes.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Logoes = () => {
    const [logoes, setLogo] = useState([]);
    
      const fetchLogo = async () => {
        let res = await fetch("../public/HomePageData/Logoes.json");
        let data = await res.json();
        // console.log("card carousel line 9", data);
        setLogo(data);
      };
    
      useEffect(() => {
        fetchLogo();
      }, []);
    
      //card setting
      const setting = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
      };
      // console.log(logoes)
  return (
    <div className="logo-container">
      <Slider {...setting}>
        {logoes.map((logo) => {
          return (
            <div className="logo-div" >
                <img className="logo-img" src={logo.img} alt={logo.alt} />
            </div>
          );
        })}
      </Slider>
    </div>
  )
}

export default Logoes