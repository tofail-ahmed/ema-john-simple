import React from 'react';
import './Product.css'

const Product = ({ product }) => {
      console.log(product)
      return (
            <div className='product'>

                  <img src={product.img} alt="" />
                  <h5 className='name'>{product.name}</h5>
                  <h5 className='price'>Price:${product.price}</h5>
                  <p className='seller'>Manufacture:{product.seller}</p>
                  <p className='ratings'>Ratings:{product.ratings}.5</p>
                  <button className='btn-cart'>Add To Cart</button>
            </div>
      );
};

export default Product;