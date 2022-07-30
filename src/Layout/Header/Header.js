import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function Header() {

  const product=["Laptop","Mobile","Smart Watch","Headphone","Speaker","Tv","Camera","Tablet","Airpod"];

  return (
    <div className="myheadsection">
      <nav className="mynav">
        <img className="mynavimg" src="../../../Logo/lg.png" />
        <Dropdown className="mynavDrop">
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Search Your Product Here...
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to={`/sub_product/${product[0]}`}>Laptop</Dropdown.Item>
            <Dropdown.Item as={Link} to={`/sub_product/${product[1]}`}>Mobile</Dropdown.Item>
            <Dropdown.Item as={Link} to={`/sub_product/${product[2]}`}>Smart Watch</Dropdown.Item>
            <Dropdown.Item as={Link} to={`/sub_product/${product[3]}`}>Headphone</Dropdown.Item>
            <Dropdown.Item as={Link} to={`/sub_product/${product[4]}`}>Speaker</Dropdown.Item>
            <Dropdown.Item as={Link} to={`/sub_product/${product[5]}`}>TV</Dropdown.Item>
            <Dropdown.Item as={Link} to={`/sub_product/${product[6]}`}>Camera</Dropdown.Item>
            <Dropdown.Item as={Link} to={`/sub_product/${product[7]}`}>Tablet</Dropdown.Item>
            <Dropdown.Item as={Link} to={`/sub_product/${product[8]}`}>Airpod</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link to="/about">
        <button className="aboutbut">About</button>
        </Link>
        <Link to="/contact">
        <button className="contactbut">Contact</button>
        </Link>
        <Link to="/login">
          <button className="logbut">Login</button>
        </Link>
        <Link to="/cart">
        <button className="carbut">
          My Cart
        </button>
        </Link>
      </nav>
    </div>
  );
}
