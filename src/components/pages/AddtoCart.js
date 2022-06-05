import React from 'react';
import { useCart } from 'react-use-cart';

const AddtoCart = () => {

    const{isEmpty,
        totalUniqueItems,
        items,totalItems,
        cartTotal,updateItemQuantity,
        removeItem,emptyCart
    }=useCart();
    if(isEmpty) return <h1 className="text-center"  style={{fontFamily:"cursive",paddingTop:"100px"}}> Your Card is Empty</h1>
    return (
        
        <div style={{backgroundColor:"rgb(232, 246, 241)",height:"100%"}}>
            <section className="py-4 container">
                <div className="col-auto ms-auto d-flex align-items-start justify-content-start w-100  my-5">
                    <h2 style={{color:"#bb2d3b"}}>Total Price: ${cartTotal}</h2>

                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h5 style={{fontFamily:"cursive",fontSize:"25px"}}>Cart :{totalUniqueItems} <br /> Total Items:{totalItems}</h5>
                        <table className="d-flex align-items-start justify-content-start table table-light table-hover m-0">
                            <tbody>
                                {items.map((item,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>
                                                <img src={item.img} alt="err" style={{height:'6rem'}} />
                                            </td>
                                            <td>{item.name}</td>
                                            <td style={{color:"black",fontFamily:"cursive"}}>{item.price}</td>
                                            <td style={{color:"black",fontFamily:"cursive"}}>Quantity:({item.quantity})</td>
                                            <td>
                                                <button className="btn btn-danger ms-2" onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                                                <button className="btn btn-success ms-2" onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
                                                <button className="btn btn-danger ms-2" onClick={()=>removeItem(item.id)}>Remove Item</button>
                                            </td>
                                        </tr>

                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto ms-auto d-flex align-items-center justify-content-center w-40" style={{border:"1px solid red",marginTop:"-350px",height:"230px",boxShadow:"0 0 10px"}} >
                        <button className="btn btn-danger m-2" onClick={()=>emptyCart()}>Clear Card</button>
                        <button className="btn btn-success m-2" >Buy Now</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddtoCart