import React, { Component } from "react";
import Slider from "react-slick";
import ste from '../../assets/img/stereo.jpg';
import rev from '../../assets/img/revolver.jpg';
import gui from '../../assets/img/guitar.jpg';
import jazz from '../../assets/img/jazz.jpg';
import juxta from '../../assets/img/juxta.jpg';
import beat from '../../assets/img/beat.jpg'
import {useTranslation} from "react-i18next"
// import '../sass/dark.css'
import 'animate.css';

const Slider4 = () => {
  const { t } = useTranslation();
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
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
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div className="slider4 container">
        <h2  className=" animate__animated animate__rotateIn hh" style={{height:"80px",fontFamily:"cursive", }}> {t('text25')}</h2>
        <Slider {...settings}>
          <div>
         <img src={ste} alt="" data-aos="zoom-in"/>
          </div>
          <div>
          <img src={rev} alt="" data-aos="zoom-in"/>
          </div>
          <div>
          <img src={gui} alt="" data-aos="zoom-in"/>
          </div>
          <div>
          <img src={jazz} alt="" data-aos="zoom-in"/>
          </div>
          <div>
          <img src={juxta} alt="" data-aos="zoom-in"/>
          </div>
          <div>
          <img src={beat} alt="" data-aos="zoom-in"/>
          </div>
       
        </Slider>
      </div>
    );

}
export default Slider4