import React from 'react'
import Navbar from './components/Nav/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/Item/ItemDetailContainer'
import { CartProvider } from './components/CartContext/CartContext'
import Cart from './components/Cart'
import Form from './components/Form'


const App = () => {
  
  return (
    <CartProvider>
      <BrowserRouter>
      
        <Navbar/>

        <Routes>
          
          <Route exact path='/' element= {<ItemListContainer/>} />
          <Route exact path='/categoria/:category' element={<ItemListContainer />} />
          <Route exact path='/product/:id' element={<ItemDetailContainer />} />
          <Route exact path='/Cart' element={<Cart/>}/>
          <Route exact path='/Form' element={<Form/>} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App

