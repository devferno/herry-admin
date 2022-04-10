import React from 'react'
import {Routes,Route, Outlet, Navigate} from "react-router-dom";
import {Home,Users,Signin,Product,AddProduct} from "./Pages";
import Layout from "./components/Layout";
import axios from "axios";

axios.defaults.baseURL ="http://localhost:5000";

const PrivateRoute=()=>{
    let isAuth = localStorage.getItem("access-admin");
    return isAuth?<Layout><Outlet/></Layout> : <Navigate to="/signin"/>
}

const App = () => {

  

  return (
    
    <Routes>
        <Route element={<PrivateRoute/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/products/add" element={<AddProduct/>}/>
        </Route>
        <Route path="/signin" element={<Signin/>}/>
    </Routes>
   
  )
}

export default App