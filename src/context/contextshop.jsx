import React from 'react'
import { createContext,useState } from 'react'
import { products } from '../products'


export const shopContext=createContext(null)

const getCart=()=>{
    let cart={}
    for (let i=1;i<products.length+1;i++){
        cart[i]=0
    }
    return cart
}

export const ShopProvider = (props) => {
    const [items,setitems]=useState(getCart());

    const totale=()=>{
        let totaleAmount=0
        for (let key in items){
            if (items[key]>0){
            let info=products[key-1].price
            totaleAmount+=items[key]*info
            }
        }
        return totaleAmount

    }

    const addToCart=(itemId)=>{
        setitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const remove=(itemId)=>{
        setitems((prev)=>({...prev,[itemId]:0}))
    }
    const updateAmount=(newAmount,itemId)=>{

        setitems((prev)=>({...prev,[itemId]:newAmount}))
    }

    const contextValue={items,addToCart,removeFromCart,remove,updateAmount,totale};
  return (
    <shopContext.Provider value={contextValue}>{props.children}</shopContext.Provider>
  )
}
