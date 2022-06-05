import { t } from 'i18next';
import React from 'react'
import { useCart } from 'react-use-cart'
const ProductItem = (props) => {
  const { addItem } = useCart();
  return (

    <div className="card container col-lg-4 col-md-4 col-10 addtocart" data-aos="fade-down" >
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body bodyy">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">${props.price} USD</p>
        <button onClick={() => addItem(props.item )}>{t('text27')}</button>
      </div>

    </div>

  )
}

export default ProductItem
