import React from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/RevieItem';
import './orders.css'
import { useState } from 'react';
   
import { deleteShoppingCart, removeFromDb } from '../..//utilities/fakedb';
     

const Orders = () => {
      const savedCart = useLoaderData()
      const [cart, setCart] = useState(savedCart)
      // console.log(cart);
      const handleRemoveCart = (id) => {
            const remainedItem = cart.filter(product => product.id !== id)
            setCart(remainedItem)
            removeFromDb(id)

      }
      const hanldeDltCart = () => {
            setCart([])
            deleteShoppingCart()
      }
      return (
            <div className='shop-container'>
                  <div className='review-container'>
                        <h2>Total selected items:{savedCart.length}</h2>
                        {
                              cart.map(product => <ReviewItem
                                    product={product}
                                    handleRemoveCart={handleRemoveCart}
                              ></ReviewItem>)
                        }
                  </div>
                  <div className='cart-container'>
                        <Cart
                              hanldeDltCart={hanldeDltCart}
                              cart={cart}>
                              <Link to='/checkout'><button>Proceed Checkout</button></Link>
                        </Cart>
                  </div>
            </div>
      );
};

export default Orders;