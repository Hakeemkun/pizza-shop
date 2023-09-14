import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useNavbar} from './components/navbar.jsx'
import {Shop} from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { ShopProvider } from './context/contextshop'
import { products } from './products'

function App(){
  const {render,searchResult,titlesOFProducts}=useNavbar()
  return(
    <div className='app'>
        <ShopProvider>
          
          <Router>
            {render}
            <Routes>
              <Route path='/' element={<Shop searchResults={searchResult} />}></Route>
              <Route path='cart' element={<Cart />}></Route>
            </Routes>
          </Router>
        </ShopProvider>
    </div>
  )
}

export default App


