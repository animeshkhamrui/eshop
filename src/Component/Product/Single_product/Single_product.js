import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import ProductJSON from "../Product.json";
import './Single_product.css'

export default function Single_product() {

    const [cart,setCart]=useState([]);

    const cartProduct=(product)=>{
      setCart(...cart,product)
      console.log("product:",cart);
    }

    const dataValue=useParams();
    // console.log("value through useparams:",dataValue);
    const pObj=ProductJSON.Electronic_Product.find((data)=>{
       return data.Product_name===dataValue.ProductName
    })
    // console.log("value: ",pObj);

    const pObj1=pObj.Sub_product.find((dataValue1)=>{
      return dataValue.CompanyName===dataValue1.Company
    })

    console.log("Value: ",pObj1);

  return (
    <div className="mainProductBackground">
      <div className="productBackground">
       <img src={pObj1.Img} height="410px" width="378px"/>
      </div>
      <div className="productDetails">
        <h5>{pObj1.Company}</h5>
        <p className="p1">Lorem ipsum is common with typesetting and printing businesses. The text did not start with the age of digital businesses as it has been used since 1500s or even earlier. The first use must have been in the creation of a specimen book. The creators wanted to know how the book will look with text on and that was when lorem ipsum started finding its place in the printing, typesetting, and digital world.
        </p>
        <p>{pObj1.Price}</p>
        <button className="buyNowBut">Buy Now</button>
        <button className="addToCartBut" onClick={()=>cartProduct(pObj1)}>Add To Cart</button>
      </div>
    </div>
  )
}
