import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './component/products/Products.jsx'
import Navbar from './component/navbar/Navbar.jsx'
import Restaurant from './component/restaurant/Restaurant.jsx';


 function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
<Routes>
  <Route path='/products'  element={ <Products/>} />
  <Route path='/restaurant'  element={ <Restaurant/>} />

</Routes>
   
    </BrowserRouter>
  )
}

export default App
