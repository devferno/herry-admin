import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Home,Users,Signin,Product,AddProduct} from "./Pages";

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/products/add" element={<AddProduct/>}/>
        <Route path="/signin" element={<Signin/>}/>
    </Routes>
  )
}

export default App