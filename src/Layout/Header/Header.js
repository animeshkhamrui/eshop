import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
        {/* <form className="mynavfor">
          <input 
            name="product"
            className="mynavforinp"
            type="text"
            placeholder="search your product here and more"
          />
          <button type="submit" className="mysearchbut" ><SearchOutlinedIcon fontSize="small"/></button>
        </form> */}
        <Link to="/login">
          <button className="logbut">Login</button>
        </Link>
        <Link to="/about">
        <button>About</button>
        </Link>
        <Link to="/contact">
        <button>Contact</button>
        </Link>
        <button className="carbut">
          <ShoppingCartIcon />
        </button>
      </nav>
    </div>
  );
}
