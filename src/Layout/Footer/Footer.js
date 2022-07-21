import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div className="mainBox">
      <ul>
        <li style={{color:"gray", marginBottom:"10px"}} className="mainBoxli">ABOUT</li>
        <li className="mainBoxli"><Link to="/about" className="mainBoxlili">About Us</Link></li>
        <li className="mainBoxli"><Link to="/contact" className="mainBoxlili">Contact Us</Link></li>
      </ul>
      <ul>
        <li style={{color:"gray", marginBottom:"10px"}} className="mainBoxli">SOCIAL</li>
        <li className="mainBoxli"><Link to="" className="mainBoxlili">Facebook</Link></li>
        <li className="mainBoxli"><Link to="" className="mainBoxlili">Twitter</Link></li>
        <li className="mainBoxli"><Link to="" className="mainBoxlili">YouTube</Link></li>
      </ul>
      <div className="para">
        <p style={{color:"gray"}}>Mail Us:-</p>
        <p>Eshop internet Private Limited,</p>
        <p>Bargachia,Howrah,711404</p>
        <p>West Bengal,India</p>
      </div>
      <div className="para">
        <p style={{color:"gray"}}>Registered Office Address:-</p>
        <p>Eshop internet Private Limited,</p>
        <p>Bargachia,Howrah,711404</p>
        <p>West Bengal,India</p>
        <p>Ph: +917407630373</p>
      </div>
    </div>
  )
}
