import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
      // console.log(cart)
      let total = 0
      let totalShipping = 0
      let quantity = 0
      for (const product of cart) {

            product.quantity = product.quantity || 1
            total = total + product.price * product.quantity
            totalShipping = totalShipping + product.shipping
            quantity = quantity + product.quantity
      }
      return (
            <div className='cart'>
                  <h3>Order Summary</h3>
                  <p>Selected Items:$ {quantity}</p>
                  <p>Total Price: ${total}</p>
                  <p>Total Shipping Charge: ${totalShipping}</p>
                  <p>Total Taxs: ${(total * 7 / 100).toFixed(1)}</p>
                  <p>Grand Total: ${(total + total * .02 + total * .15).toFixed(2)}</p>
            </div>
      );
};

export default Cart;