import React from "react";
import { useFormik } from "formik";
import { useNavigate,Link } from "react-router-dom";
import './Login.css'
import Axios from 'axios'

export default function Login() {
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (value) => {
      console.log("Submitted value: ", value);
      Axios.post('https://nodeprojectapi.herokuapp.com/login',value)
      .then(result=>{
        console.log("Axios resolve: ",result);
        window.sessionStorage.setItem('TokenValue',result.data.token)
        alert("login done")
        navigate("/")
      })
      .catch(err=>{
        console.log("Axios error: ",err);
        navigate("/login")
      })
    }
  });
  return (
    <div className="background">
      <div className="background1">
        <h1>Login</h1>
        <p>To get access your Orders</p>
        <p>please login</p>
      </div>
      <div className="background2">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email Id"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="loginput1"
        ></input>
        <br />
        <br />

        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className="loginput2"
        ></input>
        <br />
        <br />

          <button type="submit" className="loginput3">Login</button>
      </form>
      <Link to="/registration" style={{textDecoration:"none"}}><p className="loginpara">New to Eshop? Create an account</p></Link>
      </div>
    </div>
  );
}
