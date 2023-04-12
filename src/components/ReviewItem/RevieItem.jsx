import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCartFlatbed, faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveCart }) => {
      console.log(product)
      return (

            <div className='item'>
                  <img src={product.img} alt="" />

                  <div className='itemDetails'>
                        <h3><h5>{product.name}</h5></h3>
                        <h5>Price: ${product.price}</h5>
                        {/* <h5>Shipping Cost: ${product.shipping}</h5> */}
                        <h5>Quantity: {product.quantity}</h5>
                  </div>




                  <button onClick={() => handleRemoveCart(product.id)} className='btn-dlt'><FontAwesomeIcon icon={faTrash} /></button>
            </div>


      );
};

export default ReviewItem;