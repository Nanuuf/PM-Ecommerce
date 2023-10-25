import React from 'react'
import Navbar from './components/Nav/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/Item/ItemDetailContainer'


const App = () => {
  
  return (
    <BrowserRouter>
    
      <Navbar/>

      <Routes>

        
        <Route exact path='/' element= {<ItemListContainer/>} />
        <Route exact path='/Sahumos' element= {<ItemListContainer category="sahumos" />} />
        <Route exact path='/Sprays' element= {<ItemListContainer category="spray"/>} / >
        <Route exact path='/product/:id' element= {<ItemDetailContainer/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

