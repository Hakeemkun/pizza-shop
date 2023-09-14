import React, { Component, useContext } from 'react'
import {products} from '../../products'
import './shop.css'
import { shopContext } from '../../context/contextshop'
import { motion } from 'framer-motion'


export const Shop = (props) => {
    const searchedProducts=products.filter((product)=>{return props.searchResults.includes(product.title.toLowerCase())})
  return (
    <div className='shop' >
        <motion.div initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{duration:.3}} className="shopTitle">
            <h1>Tastiest pizza on the globe</h1>
        </motion.div>
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
        <motion.div className="product" id={id} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:.7}} viewport={{once:false,amount:"some"}}>
            <div className='img'><img src={img} /></div>
            <div className="title script">{title}</div>
            <div className="price script">${price}</div>
            <button className="add script" onClick={()=>addToCart(id)}>Add to cart ({itemAmount})</button>
        </motion.div>
    )
}
