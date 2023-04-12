import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCartFlatbed, faDeleteLeft, faStreetView, faToiletPortable, faTrash } from '@fortawesome/free-solid-svg-icons'


const Shop = () => {
      const [products, setProducts] = useState([])
      const [cart, setCart] = useState([])
      useEffect(() => {
            fetch('products.json')
                  .then(res => res.json())
                  .then(data => setProducts(data))
      }, [])
      useEffect(() => {
            const storedCart = getShoppingCart()
            const savedCart = []
            for (const id in storedCart) {
                  const addedProduct = products.find(product => product.id === id)
                  if (addedProduct) {
                        const quantity = storedCart[id]
                        addedProduct.quantity = quantity
                        savedCart.push(addedProduct)
                  }
            }
            setCart(savedCart)
      }, [products])
      const productAddedToCart = (product) => {
            const newCart = [...cart, product]
            setCart(newCart)
            addToDb(product.id)
      }

      const hanldeDltCart = () => {
            setCart([])
            deleteShoppingCart()
      }
      return (
            <div className='shop-container'>
                  <div className='products-container'>
                        
                        {
                              products.map(product => <Product
                                    key={product.id}
                                    product={product}
                                    productAddedToCart={productAddedToCart}
                              ></Product>)
                        }
                  </div>
                  <div className='cart-container'>
                        <Cart
                              hanldeDltCart={hanldeDltCart}
                              cart={cart}
                        >
                              <Link
                                    to='/orders'><button>Review Orders
                                          <FontAwesomeIcon icon={faToiletPortable} />
                                          </button></Link>
                        </Cart>
                  </div>
            </div>
      );
};

export default Shop;