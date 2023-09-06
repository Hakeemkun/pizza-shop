import React, { useContext, useEffect } from 'react';
import { shopContext } from '../../context/contextshop';
import { products } from '../../products';
import './cart.css';

export const Cart = () => {
  const {totale}=useContext(shopContext)
  const totaleAmount=totale()
  return (
    <div className='cart'>
      <h1 className="Title">Cart items</h1>
      <div className='carts'>
        {products.map((product) => (
          <ShoppingCart data={product} />)
        )}
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
      <div className="container">
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
      </div>
    )
  
};

