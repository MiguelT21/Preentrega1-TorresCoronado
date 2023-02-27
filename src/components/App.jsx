
import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Navbar from './Navbar/Navbar';
import Contacto from './Contacto/Contacto';
//Context
import { DarkModeProvider } from '../context/DarkModeContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <DarkModeProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/quienes-somos' element={<Contacto/>}/>
      </Routes> 
      <ToastContainer/>
      </DarkModeProvider>
    </BrowserRouter>
     
    </>
  )
}

export default App;
