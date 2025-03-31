import React, { useEffect, useState } from "react";
import "../components/Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FirstSlider = () => {
  const [carousel, setCarousel] = useState([]);

  const fetchCarousel = async () => {
    let res = await fetch("/HomePageData/carosel.json");
    let data = await res.json();
    // console.log("first set data line 14", data);
    setCarousel(data);
  };

  useEffect(() => {
    fetchCarousel();
  }, []);

  //slider setting
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,    
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 2000,
    pauseOnHover : true,
  };

  return (
    <div>
      <Slider className="slider-carousel" {...setting}>
        {carousel.map((carouse) => {
          return (
            <div className="carousel-div" key={carouse.id}>
              <img
                className="img-carousel"
                src={carouse.image}
                alt={carouse.alt}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FirstSlider;
