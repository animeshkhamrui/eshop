import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

export default function Home() {
  let data=["Mobile","Airpod","Smart Watch","Speaker"]
  return (
    <div>
     <Link to={`/sub_product/${data[0]}`}>
     <div className="anime">
     </div>
     </Link>
     <div className="hmbox">
      <Link to={`/sub_product/${data[1]}`}><img className="hmboximg" src="../../../../HomeImg/airpod.jpeg" width="316px" height="350px"/></Link>
      <Link to={`/sub_product/${data[2]}`}><img className="hmboximg" src="../../../../HomeImg/smart watch.jpg" width="316px" height="350px"/></Link>
      <Link to={`/sub_product/${data[3]}`}><img className="hmboximg" src="../../../../HomeImg/speaker.webp"  width="316px" height="350px"/></Link>
     </div>
    </div>
  )
}
