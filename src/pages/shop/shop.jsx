import React, { Component, useContext } from 'react'
import {products} from '../../products'
import './shop.css'
import { shopContext } from '../../context/contextshop'


export const Shop = (props) => {
    const searchedProducts=products.filter((product)=>{return props.searchResults.includes(product.title.toLowerCase())})
  return (
    <div className='shop' >
        <div className="shopTitle">
            <h1>Tastiest pizza on the globe</h1>
        </div>
        <div className='products'>
        { searchedProducts.length==0? products.map((product)=>(<Product data={product}/>)):searchedProducts.map((product)=>(<Product data={product}/>))}
        </div>
    </div>
  )
}

const Product=(props)=>{
    const {id,title,img,price}=props.data

    const {items,addToCart}=useContext(shopContext)
    const itemAmount=items[id]
    return(
        <div className="product" id={id}>
            <div className='img'><img src={img} /></div>
            <div className="title script">{title}</div>
            <div className="price script">${price}</div>
            <button className="add script" onClick={()=>addToCart(id)}>Add to cart ({itemAmount})</button>
        </div>
    )
}
