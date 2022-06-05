import React from 'react'
import one from '../../assets/img/ones.png'
import second from '../../assets/img/secondd.png'
import third from '../../assets/img/thirds.png'
import five from '../../assets/img/fifthh.png'
import Slider5 from "./Slider5"
import MagazinePr from  "./MagazinePr"
import p1 from '../../assets/img/Print.jpg'
import p2 from '../../assets/img/Digital.jpg'
import p3 from "../../assets/img/Stationery.jpg"
import p4 from '../../assets/img/Music.png'
import p5 from '../../assets/img/Fashionn.png'
import p6 from '../../assets/img/Healthy.png'
import p7 from '../../assets/img/Auto.png'
import p8 from '../../assets/img/Home.png'
import p9 from '../../assets/img/Art.png'
import Slider6 from "./Slider6"
import {useTranslation} from "react-i18next"
// import '../sass/dark.css'
// import useThemeSwitcher from './useThemeSwitcher';
const Magazines = () => {
  // const ThemeSwitcher=useThemeSwitcher();
  const { t } = useTranslation();
  return(
  <div>
    <section className='section4'>
     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
        </div>
        <div className="carousel-inner crs">
          <div className="carousel-item active">
            <img src={one} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={second} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={third} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={five} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </section>
       <Slider5/>   
    <MagazinePr/>
     <section className="section6">
        <div className="r" >
          <div className="r1" data-aos="flip-left"><img src={p1} alt=""/></div>
          <div className="r1" data-aos="flip-left"><img src={p2} alt=""/></div>
          <div className="r1 " data-aos="flip-left"><img src={p3} alt=""/></div>
        </div>
      </section>
      <section className='section7'>
        <div className="texts" data-aos="zoom-in-up"><p>{t('text52')}</p></div>
<div className="row imgs ">
  <div className="col img1"><img src={p4} alt="" /><p>{t('text59')}</p><i className="fas fa-arrow-right" style={{display:"none"}}/></div>
  <div className="col  img1"><img src={p5} alt="" /><p>{t('text54')}</p><i className="fas fa-arrow-right" style={{display:"none"}}/></div>
  <div className="col img1"><img src={p6} alt="" /><p>{t('text55')}</p><i className="fas fa-arrow-right" style={{display:"none"}}/></div>
  <div className="col img1"><img src={p7} alt="" /><p>{t('text56')}</p><i className="fas fa-arrow-right" style={{display:"none"}}/></div>
  <div className="col  img1"><img src={p8} alt="" /><p>{t('text57')}</p><i className="fas fa-arrow-right" style={{display:"none"}}/></div>
  <div className="col  img1"><img src={p9} alt="" /><p>{t('text58')}</p><i className="fas fa-arrow-right" style={{display:"none"}}/></div>
</div>
      </section>
      {/* <section className='sec5'>  */}
        <Slider6/>
      {/* </section> */}
      {/* {ThemeSwitcher} */}
  </div>
  )
};

export default Magazines;
