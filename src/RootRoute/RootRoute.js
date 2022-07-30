import React,{Suspense} from 'react'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
// import About from '../Component/About/About'
import Login from '../Component/Authentication/Login/Login'
import Reg from '../Component/Authentication/Registration/Reg'
// import Contact from '../Component/Contact/Contact'
import Home from '../Component/Home/Home'
import ListItem from '../Component/Item/List-item/ListItem'
import Single_product from '../Component/Product/Single_product/Single_product'
import Sub_product from '../Component/Product/Sub_product/Sub_product'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'
import Spinner from 'react-bootstrap/Spinner';
import Mycart from '../Component/Mycart/Mycart'

const ContactUs=React.lazy(()=>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve(import('../Component/Contact/Contact')),3000)
  })
})
const AboutUs=React.lazy(()=>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve(import('../Component/About/About')),3000)
  })
})

export default function RootRoute() {
  return (
    <Router>
        <Header/>
        <ListItem/>
        <Suspense fallback={<h3 style={{textAlign:"center", height:"400px", paddingTop:"150px"}}><Spinner animation="border" />.........Loading</h3>}>
        <Routes>
            <Route path="" element={<Home/>}/>
             
            <Route path="cart" element={<Mycart/>}/>
            <Route path="contact" element={<ContactUs/>}/>
            <Route path="about" element={<AboutUs/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="registration" element={<Reg/>}/>
            <Route path="sub_product/:ProductName" element={<Sub_product/>}/>
            <Route path="single_product/:ProductName/:CompanyName" element={<Single_product/>}/>
        </Routes>
        </Suspense>
        <Footer/>
    </Router>
  )
}
