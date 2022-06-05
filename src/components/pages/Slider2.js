import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bat from '../../assets/img/battle.jpg'
import wom from '../../assets/img/woman.jpg'
import won from '../../assets/img/wonder.jpg'
import strk from '../../assets/img/strikes.jpg'
import guide from '../../assets/img/guide.jpg'
import hun from '../../assets/img/100.jpg'
import cel from '../../assets/img/celeb.jpg'
import reb from '../../assets/img/rebel.jpg'
import people from '../../assets/img/people.jpg' 
import box from '../../assets/img/box.jpg'
import { t } from "i18next";
import {useTranslation} from "react-i18next"
// import '../sass/dark.css'
const Slider2 = () => {
  const { t } = useTranslation();
    const settings = {
      className: "center",
      centerMode:false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container" >
          <h1 className="container firsttext">{t('text23')}</h1>
        <Slider {...settings}  className=" slider2">
          {/* className='sldr' */}
          <div>
            <img src={bat} alt="" data-aos="flip-left"/>
          </div>
          <div>
          <img src={wom} alt="" data-aos="flip-left"/>
          </div>
          <div>
          <img src={won} alt="" data-aos="flip-left"/>
          </div>
          <div>
          <img src={hun} alt="" data-aos="flip-left" />
          </div>
          <div>
          <img src={guide} alt="" data-aos="flip-left" />
          </div>
          <div>
          <img src={strk} alt="" data-aos="flip-left" />
          </div>
          <div>
          <img src={people} alt="" data-aos="flip-left"/>
          </div>
          <div>
          <img src={reb} alt="" data-aos="flip-left"/>
          </div>
          <div>
          <img src={cel} alt="" data-aos="flip-left"/>
          </div>
          <div>
          <img src={box} alt="" data-aos="flip-left"/>
          </div>
        </Slider>
        
      </div>
    );
  
}
export default Slider2