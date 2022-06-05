import React,{useState,useEffect}  from 'react'
import Slider from 'react-slick'
// import { useCart, } from 'react-use-cart'
import ProductItem2 from './ProductItem2'
const Product2 = () => {

  return (

    <div className="row">
    {data2[cardIndex].productData5.map((item,index)=>{
     return(
      <ProductItem2  img={item.img} title={item.title} price={item.price} item={item} key={index}/> 
     )
     
}

)}
</div>

   
  )
}
Product2.defaultProps={
  id:1
}
export default Product2