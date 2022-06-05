import React from 'react'
import re from '../../assets/img/re.png'
// import '../sass/dark.css'
const Cuopon = () => {
  return (
    <div className='totals pt-5 ' data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
        <div className="card coupon pt-5"> 
        <img src={re} alt="" />
        <div className="card-body body2 py-5">         
          <div className="title"><p className="card-text" style={{fontSize:"23px"}}>Redeem your coupon code</p></div>
          <input type="text" placeholder='Enter Coupon Code' />
          <div className="button" ><button href="#" >REDEEM</button></div>
        </div>
      </div>
    </div>
  )
}

export default Cuopon