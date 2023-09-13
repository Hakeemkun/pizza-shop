import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart,MagnifyingGlass } from "phosphor-react"
import './navbar.css'
import { products } from "../products";
import { shopContext } from "../context/contextshop";

export const useNavbar=()=>{
    const titlesOFProducts=products.map((product)=>{return product.title.toLowerCase()})

    const [searchItem, setSearchItem] = useState("");
    const [searchResult, setSearchResult] = useState([titlesOFProducts]);

    const handleChange = (value) => {
        setSearchItem(value);

        
        const results = products.filter((product) => {
            return product.title.toLowerCase().includes(searchItem.toLowerCase());
        });

        setSearchResult(results.map((result)=>{return result.title.toLowerCase()}));
    }
    
    const [toggleSearch,setToggleSearch]=useState(false)
    const handleClick=()=>{
        setToggleSearch(!toggleSearch)
    }
    return {
        searchResult,
        render : (
        <div className="navbar">
            <div className="links">
                <div className="logo" ><Link to="/pizza-shop" >Hakeem.</Link></div>
                <form className="search">
                    <i onClick={handleClick} ><MagnifyingGlass size={24} color="white" /></i><input className="searchBar" type="search" placeholder="Search" aria-label="Search" value={searchItem} onChange={(e)=>{handleChange(e.target.value)}} />
                    <div className="responsive-search">
                        <span style={{display:toggleSearch ?"flex":"none"}} onClick={()=>{setToggleSearch(false)}}>&times;</span><input className="searchBar2" style={{display:toggleSearch ?"flex":"none"}}  type="search" placeholder="Search" aria-label="Search" value={searchItem} onChange={(e)=>{handleChange(e.target.value)}} />
                    </div>
                </form>

                <div className="cart">
                    <Link to="cart" >
                        <ShoppingCart size="32" />
                    </Link>
                </div>
            </div>
        </div>)
    }
}



