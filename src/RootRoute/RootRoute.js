import React from 'react'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import About from '../Component/About/About'
import Login from '../Component/Authentication/Login/Login'
import Reg from '../Component/Authentication/Registration/Reg'
import Contact from '../Component/Contact/Contact'
import Home from '../Component/Home/Home'
import ListItem from '../Component/Item/List-item/ListItem'
import Single_product from '../Component/Product/Single_product/Single_product'
import Sub_product from '../Component/Product/Sub_product/Sub_product'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'

export default function RootRoute() {
  return (
    <Router>
        <Header/>
        <ListItem/>
        <Routes>
            <Route path="" element={<Home/>}/>
             
            <Route path="contact" element={<Contact/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="registration" element={<Reg/>}/>
            <Route path="sub_product/:ProductName" element={<Sub_product/>}/>
            <Route path="single_product/:ProductName/:CompanyName" element={<Single_product/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}
