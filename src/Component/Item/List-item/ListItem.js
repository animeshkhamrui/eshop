import React from "react";
import "./ListItem.css";
import { Link } from "react-router-dom";

export default function ListItem() {

  const productName=["Laptop","Mobile","Smart Watch","Headphone","Speaker","Tv","Camera","Tablet","Airpod"];

  return (
    <div className="list-item">
      <Link to={`/sub_product/${productName[0]}`} style={{textDecoration: "none"}}>
        <div>
          <img className="list-item1-img" src="../../../Images/laptop.jpg" height="45px" width="45px" />
          <p className="list-item1-p" >Laptop</p>
        </div>
      </Link>
      <Link to={`/sub_product/${productName[1]}`} style={{textDecoration: "none"}}>
        <div>
          <img className="list-item1-img" src="../../../Images/mobile.jfif" height="45px" width="45px" />
          <p className="list-item1-p" >Mobile</p>
        </div>
      </Link>
      <Link to={`/sub_product/${productName[2]}`} style={{textDecoration: "none"}}>
        <div>
          <img className="list-item1-img"
            src="../../../Images/smart watch.png"
            height="45px"
            width="45px"
          />
          <p className="list-item1-p" >Smart Watch</p>
        </div>
      </Link>
      <Link to={`/sub_product/${productName[3]}`} style={{textDecoration: "none"}}>
        <div>
          <img className="list-item1-img"
            src="../../../Images/headphone.jpeg"
            height="45px"
            width="45px"
          />
          <p className="list-item1-p" >Headphone</p>
        </div>
      </Link>
      <Link to={`/sub_product/${productName[4]}`} style={{textDecoration: "none"}}>
        <div>
          <img className="list-item1-img" src="../../../Images/speaker.jpeg" height="45px" width="45px" />
          <p className="list-item1-p" >Speaker</p>
        </div>
      </Link>
      <Link to={`/sub_product/${productName[5]}`} style={{textDecoration: "none"}}>
        <div>
          <img className="list-item1-img" src="../../../Images/tv.webp" height="45px" width="45px" />
          <p className="list-item1-p" >TV</p>
        </div>
      </Link>
      <Link to={`/sub_product/${productName[6]}`} style={{textDecoration: "none"}}>
        <div>
          <img className="list-item1-img" src="../../../Images/camera.webp" height="45px" width="45px" />
          <p className="list-item1-p" >Camera</p>
        </div>
      </Link>
      <Link to={`/sub_product/${productName[7]}`} style={{textDecoration: "none"}}>
        <div>
          <img className="list-item1-img" src="../../../Images/tablet.jfif" height="45px" width="45px" />
          <p className="list-item1-p" >Tablet</p>
        </div>
      </Link>
      <Link to={`/sub_product/${productName[8]}`} style={{textDecoration: "none"}}>
        <div>
          <img className="list-item1-img" src="../../../Images/airpod.jpg" height="45px" width="45px" />
          <p className="list-item1-p" >Airpod</p>
        </div>
      </Link>
    </div>
  );
}
