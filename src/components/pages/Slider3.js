import React, { Component } from "react";
import Slider from "react-slick";
import kai from '../../assets/img/kaia.jpg';
import town from '../../assets/img/town.jpg';
import baz from '../../assets/img/bazaar.jpg';
import bad from '../../assets/img/badass.jpg';
import allure from '../../assets/img/allure.jpg';
import vog from '../../assets/img/vog.jpg'
import {useTranslation} from "react-i18next"
// import '../sass/dark.css'
const Slider3 = () => {
  const { t } = useTranslation();
   {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      },
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
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider3" data-aos="fade-up">
        <h3  className="container texth3">{t('text24')}</h3>
        <Slider {...settings}>
          <div>
           <img src={kai} alt="" />
          </div>
          <div>
          <img src={town} alt="" />
          </div>
          <div>
          <img src={baz} alt="" />
          </div>
          <div>
          <img src={bad} alt="" />
          </div>
          <div>
          <img src={allure} alt="" />
          </div>
          <div>
          <img src={vog} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default Slider3
