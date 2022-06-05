import React from 'react'
import {Link} from 'react-router-dom'
import magazine from '../../assets/img/1.jpg'
import Slider from 'react-slick';
import jlo from '../../assets/img/jlo.jpg'
import Slider1 from './Slider1'
import Card1 from './Card1'
import Product from './Product';
import Slider2 from './Slider2'
import Slider3 from './Slider3'
import Slider4 from './Slider4'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import jza from '../../assets/img/jza.jpg'
import york from '../../assets/img/newyork.jpg'
import diet from '../../assets/img/diets.jpg'
import law from '../../assets/img/lawrence.jpg'
import cosmo from '../../assets/img/cosmo.jpg'
import ree from '../../assets/img/reeves.jpg'
import { t } from 'i18next';
import {useTranslation} from "react-i18next"
function Home() {
  const { t } = useTranslation();
  return( 
  <div className='totalhome'>
    <section className='section1'>
   <div className='image1'>
    <div className='img1'>
    <img src={magazine} alt="" />
     </div>
     <div className='texts'> 
     <h1><i class="far fa-newspaper"></i> MAGAZINE <span style={{}}>R</span></h1>
      <h1>{t('text5')}</h1>
     <button className='btn1 '><Link to='/link'> {t('text6')} </Link></button>
     </div>
    </div>
    </section>
    <Slider1/>
    <section className='section2'>
    <div className="textimg container" ><img src={jza} alt="" data-aos="zoom-in-left"/>
    <p className='pp' data-aos="fade-up-left" >{t('text8')} </p>
    </div>
    </section>
    <section className='section3'>
    <div className="text"><h1 className="container">{t('text9')}</h1></div>
      <div className="row" >
      <Card1 title={t('text10')} text={t('text11')} img={jlo}  />
<Card1  img={cosmo}  title={t('text12')} text={t('text13')} />
<Card1 title={t('text14')} text={t('text15')} img={diet} />
 <br />
<Card1  title={t('text16')} text={t('text17')}  img={law} />
<Card1  title={t('text18')}text={t('text19')}  img={york} />
<Card1 title={t('text20')} text={t('text21')} img={ree} />
{/* </div> */}
</div>
</section>
<Slider2/>
<div className="sldr34 container">
<Slider3/>
<Slider4/> 
</div>
<Product/>
    </div>
   
    )
  
}
export default Home
