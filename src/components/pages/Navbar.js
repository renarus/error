import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import useThemeSwitcher from "../../components/useThemeSwitcher";
// import two from '../img/mgzn2.png'
// import mag from '../img/mag.
// import "../sass/dark.scss"
import fl1 from '../../assets/img/flagaz.png'
import fl2 from '../../assets/img/gb.png'
import {useTranslation} from 'react-i18next';
import i18next from 'i18next'
const languages = [
  {
      code: 'az',
      name: <p className='flagtext'><img src={fl1}alt="" /> Azerbaijan</p>,
      country_code: 'az',
    
  },
  {
      code: 'en',
      name: <p className='flagtext'><img src={fl2}alt="" /> English</p>,
      country_code: 'gb'
  },



]

const Navbar = () => {
  const ThemeSwitcher = useThemeSwitcher();
  const { totalItems } = useCart();
  const{t}=useTranslation();
  return (
    <div className='totaly'>
      <section className='section1'>

        {/* <img src={mag} alt="" /> */}
        {/* <img src={two} alt="" /> */}
        <div className='navicon'>
          <div className="con">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-lg-0">
                    <li className="nav-item">
                      <Link to='/' className="nav-link active" aria-current="page" href="#"> {t('text1')}</Link>
                      {/* {t('text1')} */}
                    </li>

                    <li className="nav-item animate__animated animate__fadeInUpBig">
                      <Link to='/magazines' className="nav-link active" aria-current="page" href="#">{t('text2')}</Link>
                      {/* {t('text2')} */}
                    </li>
                    {/* <li className="nav-item animate__animated animate__fadeInUpBig">
                    </li> */}
                    <li className="nav-item animate__animated animate__fadeInUpBig">
                      <Link to='/blogs' className="nav-link active" aria-current="page" href="#">{t('text3')}</Link>
                    </li>
                    <li className="nav-item animate__animated animate__fadeInUpBig">
                      <Link to='/cou' className="nav-link active" aria-current="page" href="#">{t('text4')}</Link>
                    </li>
                    <li className="nav-item animate__animated animate__fadeInUpBig">
                      <Link to='/about' className="nav-link active" aria-current="page" href="#">{t('text60')}</Link>
                    </li>
                  </ul>
                  
                    <NavLink to="/cart" className="navcart" ><i className="fas fa-shopping-cart" /> <p>{totalItems}</p></NavLink>
               
                  <div className="dropdown drp">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    🌐
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {languages.map(({code, name, country_code}) => (
                        <li key={country_code} >
                            <button className="dropdown-item" 
                            onClick={()=> {i18next.changeLanguage(code)}}>
                                {name}
                               
                            </button>
                        </li>
                        ))}
                    </ul>
                </div>




                </div>
                {ThemeSwitcher}
                {/* <NavLink to="/cart"  className="nav-link link1 d-flex mt-2" aria-current="page" activeClassName="active" aria-current="page" href="#">
                    <div className="number d-flex align-items-center justify-content-center">
                 ({totalItems}) 
                </div> 
                </NavLink> */}
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>

  )
}


export default Navbar
