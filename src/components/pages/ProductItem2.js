import React,{useState} from 'react'
import { useCart, } from 'react-use-cart'
import { Link} from 'react-router-dom';
// import '../sass/dark.css'
const ProductItem2 = (props) => {
    const {addItem,}=useCart();
    // const[active,setActive]=useState('first')
    return (
       
        <div className=" card col-3 container cart cardd" >
        <img src={props.img} className="card-img-top" alt="..."  />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">${props.price}</p>
       <button><Link to="/about"> More info</Link> </button>
        </div>
      </div>  
      // </div>
    
    )
}

export default ProductItem2
