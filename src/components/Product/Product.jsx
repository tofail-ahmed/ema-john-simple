import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCartFlatbed } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
      const { img, name, price, seller, ratings } = props.product
      const productAddedToCart = props.productAddedToCart
      // console.log(props.product)
      return (
            <div className='product'>

                  <img src={img} alt="" />
                  <h5 className='name'>{name}</h5>
                  <h5 className='price'>Price:${price}</h5>
                  <p className='seller'>Manufacture:{seller}</p>
                  <p className='ratings'>Ratings:{ratings}.5</p>
                  <button onClick={() => productAddedToCart(props.product)} className='btn-cart'>Add To Cart
                        <FontAwesomeIcon icon={faCartFlatbed} />
                  </button>
            </div>
      );
};

export default Product;