import { t } from 'i18next'
import React from 'react'
import {useTranslation} from "react-i18next"
function Card1(props) {
  const { t } = useTranslation();
  return (
          
        <div className="container card1 col-lg-4 col-md-6 mt-3" data-aos="fade-up" style={{backgroundColor:"rgb(232, 246, 241)"}}>
        <img src={props.img}  className="card-img-top" alt="..."  />
        <div className="card-body">
          <h5 className="card-title" >{props.title}</h5>
          <p className="card-text" style={{height:"120px"}}>{props.text}</p>
          <a href="#" className="btn" style={{backgroundColor:"rgb(12,245,129)"}} >{t('text22')}</a>
        </div>
        </div>

     
        
          
    
  )
}

export default Card1