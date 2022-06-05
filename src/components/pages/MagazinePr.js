import React,{useState,useEffect} from 'react'
import Slider from 'react-slick'
import data2 from "../data/data2"
import ProductItem2 from './ProductItem2'
// import '../sass/dark.css'
// import useThemeSwitcher from './useThemeSwitcher';
import {useTranslation} from "react-i18next"
const MagazinePr = (props) => {
  // const ThemeSwitcher=useThemeSwitcher();
  const { t } = useTranslation();
  const[id,setid]=useState(props.id)
  useEffect(()=>{
    localStorage.setItem('id',id);
  },[id])
  var settings = {

        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,

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
   <div>
     <section className='magazinepr'>
                <div className="sliderpr" >
                    <div className="buttons">
                     <button className="button" id="1" onClick={()=>setid(1)}> {t('text48')} </button>
                        <button className="button" id="2" onClick={()=>setid(2)} > {t('text49')}</button>
                        <button className="button" id="3" onClick={()=>setid(3)} > {t('text50')}</button>
                       <button className="button" id="4" onClick={()=>setid(4)} >{t('text51')}</button>
                    
                     </div>
                        
                    {(() => {
        if (id==1) {
          return (
            <Slider className='sliderr' {...settings}>
              {data2.productData2.map((item,index)=>{
                return(
                  <ProductItem2
                  img={item.img}
                  price={item.price}
                  title={item.title}
                  />
                )
              })}
            </Slider>
          )
        } else if (id==2) {
          return (
            <Slider className='sliderr' {...settings}>
              {data2.productData3.map((item,index)=>{
                return(
                  <ProductItem2
                  img={item.img}
                  price={item.price}
                  title={item.title}
                  />
                )
              })}
            </Slider>
          )
            }else if (id==3) {
            return (
              <Slider className='sliderr' {...settings}>
                {data2.productData4.map((item,index)=>{
                  return(
                    <ProductItem2
                    img={item.img}
                    price={item.price}
                    title={item.title}
                    />
                  )
                })}
              </Slider>
            )
        } else if(id==4) {
          return (
            <Slider className='sliderr' {...settings}>
            {data2.productData5.map((item,index)=>{
              return(
                <ProductItem2
                img={item.img}
                price={item.price}
                title={item.title}
                />
              )
            })}
          </Slider>
          )
        }
      })()}          
                </div>
          
        </section>
  {/* {ThemeSwitcher} */}
     </div>
  )
}
MagazinePr.defaultProps={
  id:1
}
     

export default MagazinePr