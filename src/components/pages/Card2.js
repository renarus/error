import React from 'react'
import gold from '../../assets/img/gold.png' 

const Card2 = (props) => {
  return (
<div className="card col-lg-2 col-md-6 col-10 px-2 card2 container" data-aos="fade-up"  data-aos-duration="1000" style={{width:'200px',height:"300px",marginTop:"70px",display:"flex",alignItems:"center",position:"relative"}}>
    <img src={props.img} className="card-img-top" alt="..." />
    <div className="card-body d-flex justify-content-center ">
     <div className="div" style={{width:"190px",height:"40px",position:"absolute"}}><p className="card-text text-center " style={{marginTop:"-10px",color:"rgb(54, 10, 10)",fontFamily:"monospace"}}>{props.title} <br /><img src={gold} alt=""  style={{width:"40px",height:"40px",marginLeft:"100px",marginTop:"-160px"}} /> </p></div>
    </div>
  </div>
  
 
  )
}

export default Card2