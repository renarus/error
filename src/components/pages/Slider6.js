import { t } from "i18next";
import React, { Component } from "react";
import Slider from "react-slick";
import lady from '../../assets/img/lady.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
    
          <section className="slider6 container">
        <div className="sliderr" >
        <img src={lady} alt="" />
        <Slider {...settings}>
          <div>
          <p>All of the magazine 😍 books 📚 you need with no hassle no worries</p>
          </div>
          <div>
         <p>If you are looking for amazing international fashion magazines and other subjects,</p> 
          </div>
          <div>
        <p>I’ve been using Magazine Cafe as my magazine resource for a couple years</p>
          </div>
          <div>
          <p>The customer service at Magazine Cafe exceeded my expectations. There </p>
          </div>
          <div>
          <p> This is the place to get the magazines you won't find anywhere else,</p>
          </div>
          <div>
          <p> A magazine store! I thought they went the way of the dodo! Excellent </p>
          </div>
        </Slider>
        </div>
        <h6 data-aos="fade-left">{t('text53')}</h6>
        </section>
      
        
      
    );
  }
}