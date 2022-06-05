import { t } from 'i18next'
import {useTranslation} from "react-i18next"
import React, { Component } from 'react'
const Footer = ()=> {
  const { t } = useTranslation();
    return (
      <div style={{backgroundColor:"rgb(0, 0, 0)"}}>
           <footer className="page-footer font-small unique-color-light footer mt-5">
        <div style={{backgroundColor: 'rgb(12, 245, 129)'}}>
          <div className="container">
            {/* Grid row*/}
            <div className="row py-4 d-flex align-items-center">
              {/* Grid column */}
              <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 className="mb-0 text-light">{t('text28')} </h6>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-6 col-lg-7 text-center text-md-right d-flex justify-content-around">
                {/* Facebook */}
                <a className="fb-ic">
                  <i className="fab fa-facebook-f white-text mr-4"> </i>
                </a>
                {/* Twitter */}
                <a className="tw-ic">
                  <i className="fab fa-twitter white-text mr-4"> </i>
                </a>
                {/* Google +*/}
                <a className="gplus-ic">
                  <i className="fab fa-google-plus-g white-text mr-4"> </i>
                </a>
                {/*Linkedin */}
                <a className="li-ic">
                  <i className="fab fa-linkedin-in white-text mr-4"> </i>
                </a>
                {/*Instagram*/}
                <a className="ins-ic">
                  <i className="fab fa-instagram white-text mr-4"> </i>
                </a>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row*/}
          </div>
        </div>
        {/* Footer Links */}
        <div className="container text-center text-md-left mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
           
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold text-light">{t('text29')}</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '40px'}} />
              <p>
                <h6  className='text-light'>{t('text30')}</h6>
              </p>
              <p>
                <h6 className='text-light'>{t('text31')}</h6>
              </p>
              <p>
                <h6 className='text-light'>{t('text32')}</h6>
              </p>
              <p>
                <h6 className='text-light'>{t('text33')}</h6>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold text-light">{t('text34')}</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '40px'}} />
              <p>
                <h6 className='text-light'>{t('text35')}</h6>
              </p>
              <p>
                <h6 className='text-light'>{t('text36')}</h6>
              </p>
              <p>
                <h6 className='text-light'>{t('text37')}</h6>
              </p>
            
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold text-light">{t('text38')}</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '40px'}} />
              <p>
               <h6  className='text-light'> {t('text39')}</h6></p>
              <p>
             <h6  className='text-light'> {t('text40')} </h6></p>
              <p>
              <h6  className='text-light'> {t('text41')}</h6></p>
              
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold text-light">{t('text42')}</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '40px'}} />
              <p>
               <h6  className='text-light' >{t('text43')} </h6></p>
              <p>
               <h6  className='text-light'> {t('text44')} </h6></p>
               </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
        {/* Copyright */}
        <div className="footer-copyright text-center py-3 text-light">{t('text45')}
          <a href="http://localhost:3000/" style={{textDecoration:"none", color:"white"}}> {t('text46')}</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
      </div>
    )
  
}

export default Footer