import React, { useContext, useEffect, useRef, useState } from 'react';
import { shopContext } from '../../context/contextshop';
import { products } from '../../products';
import './cart.css';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

export const Cart = () => {
  const {totale}=useContext(shopContext)
  const totaleAmount=totale()

  return (
    <div className='cart'>
      <h1 className="Title">Cart items</h1>
      <div className='carts'>
        <AnimatePresence>
        {products.map((product,index) => (
          
          <ShoppingCart data={product} />)
        )}
        </AnimatePresence>
      </div>
      
      <div className='totale'>Totale amount : ${totaleAmount}  </div>  
    </div>
  );
};

const ShoppingCart = (props) => {
  const { id, title, img, price } = props.data;
  const { addToCart, removeFromCart, remove, items,updateAmount } = useContext(shopContext);
  const itemAmount = items[id];
  
  




  return (
    itemAmount>0 &&
      <motion.div className="container" >
        <div className="cartImg">
          <img src={img} alt={title} />
        </div>
        <div className='descript'>
          <div className="cartTitle">{title}</div>
          <div className="price">price : ${price}</div>
          <div className="buttons">
            <button onClick={() => removeFromCart(id)}>-</button>
            <input className="counter" value={items[id]} onChange={(e)=>{updateAmount(Number(e.target.value),id)}}  />
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        </div>
        <div className="close" onClick={() => remove(id)}>&times;</div>
      </motion.div>
    )
  
};

