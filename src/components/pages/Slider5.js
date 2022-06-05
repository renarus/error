import React, { Component } from "react";
import Slider from "react-slick";
import bazaar from '../../assets/img/bazzar.png'
import min from '../../assets/img/1917.png'
import mido from '../../assets/img/midori.png'
import nys from '../../assets/img/nyc.png'
import vog from '../../assets/img/vogue.png'
import elle from '../../assets/img/elle.png'
import lof from '../../assets/img/lofficel.png'
import ad from '../../assets/img/ad.png'
import mar from '../../assets/img/marie.png'
import gq from '../../assets/img/gq.png'
import next from '../../assets/img/next.png'
import {useTranslation} from "react-i18next"
// import '../sass/dark.css'
const Slider5 = ()=> {
  const { t } = useTranslation();
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 5
          }
        }
      ]
    };
    
    return (
        <section className="section5">
        <h4 className='container'>{t('text47')}</h4>
      <div className="container slider5 ">   
        <Slider {...settings}>
          <div className="div" data-aos="fade-up"
     data-aos-duration="3000">
            <img src={bazaar}  />
          </div>
          <div className="div" data-aos="fade-up"
     data-aos-duration="3000">
          <img src={min} alt="" />
          </div>
          <div className="div" data-aos="fade-up"
     data-aos-duration="3000">
          <img src={mido} alt="" />
          </div>
          <div className="div" data-aos="fade-up"
     data-aos-duration="3000">
          <img src={nys} alt="" />
          </div>
          <div className="div" data-aos="fade-up"
     data-aos-duration="3000">
          <img src={vog} alt="" />
          </div>
          <div className="div" data-aos="fade-up"
     data-aos-duration="3000">
           <img src={elle} alt="" />
          </div>
          <div className="div" data-aos="fade-up"
     data-aos-duration="3000">
          <img src={ lof} alt="" />
          </div>
          <div className="div">
          <img src={ad} alt="" />
          </div>
          <div className="div">
          <img src={ mar} alt="" />
          </div>
          <div className="div" data-aos="fade-up"
     data-aos-duration="3000">
          <img src={ gq} alt="" />
          </div>
          <div className="div" data-aos="fade-up"
     data-aos-duration="3000">
          <img src={ next} alt="" />
          </div>
        </Slider>
      </div>
      </section>
    );
  
}
export default Slider5