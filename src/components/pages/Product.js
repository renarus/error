import React from 'react'
import data1 from '../data/data1'
import ProductItem from './ProductItem'
// import '../sass/dark.css'
import { useTranslation } from 'react-i18next'

const Product = () => {
    const { t } = useTranslation();
    return (
      
        <div className="row">
             {data1.productData.map((item,index)=>{
              return(
               <ProductItem  img={item.img} name={t(item.name)} price={t(item.price)} item={item} key={index}/>
              
         
               
              )
             
              
         })}
         </div>
   
      
      
      
     
    )
}

export default Product



