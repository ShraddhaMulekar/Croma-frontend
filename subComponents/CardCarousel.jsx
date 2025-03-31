import React, { useEffect, useState } from "react";
import "./CardCarousel.css";
import Slider from "react-slick";
import "./CardCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardCarousel = () => {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    let res = await fetch("/HomePageData/card-carosel.json");
    let data = await res.json();
    // console.log("card carousel line 9", data);
    setCards(data);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  //card setting
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  // console.log(cards)

  return (
    <div className="card-container">
      <Slider {...setting}>
        {cards.map((card) => {
          return <img className="card-img" src={card.img} alt={card.alt} />;
        })}
      </Slider>
    </div>
  );
};

export default CardCarousel;
