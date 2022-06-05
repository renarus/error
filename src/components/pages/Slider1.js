import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import jlo from '../../assets/img/jlo.jpg'
import ben from '../../assets/img/ben.jpg'
import billie from '../../assets/img/billie.jpg'
import blck from '../../assets/img/blck.jpg'
import eat from '../../assets/img/eating2.jpg'
import fair from '../../assets/img/fair.jpg'
import wom from '../../assets/img/woman.jpg'
import str from '../../assets/img/starr.jpg'
import {useTranslation} from "react-i18next"
const Slider1 = () => { 
  const { t } = useTranslation();
    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 500,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow:3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
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
      <div className="container" style={{marginTop:"100px" }}>
          <h1 className="container h1" style={{height:"80px",fontFamily:"cursive"}}>{t("text7")}</h1>
        <Slider {...settings} className='slider1'>
          <div className="imgi" data-aos="fade-up">
          <img src={jlo} alt="" />
            <i className="far fa-heart" /><i className="fas fa-share-alt" />
            </div>
          <div className="imgi" data-aos="fade-up">
          <img src={ben} alt="" />
          </div>
          <div className="imgi" data-aos="fade-up">
          <img src={billie} alt="" />
          </div>
          <div className="imgi" data-aos="fade-up">
          <img src={blck} alt="" />
          </div>
          <div className="imgi" data-aos="fade-up">
          <img src={eat} alt="" />
          </div>
          <div className="imgi" data-aos="fade-up">
          <img src={fair} alt="" />
          </div>
          <div className="imgi" data-aos="fade-up">
          <img src={wom} alt="" />
          </div>
          <div className="imgi" data-aos="fade-up">
          <img src={str} alt="" />
          </div>
          <div className="imgi" data-aos="fade-up"><img src="https://marketplace.canva.com/EAEyMzBly_w/1/0/283w/canva-yellow-elegant-fashion-magazine-cover-z2fMLOLNOwI.jpg" alt="" /></div>
        </Slider>
        
      </div>
    );
  
}
export default Slider1