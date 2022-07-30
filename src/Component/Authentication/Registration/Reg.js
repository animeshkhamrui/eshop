import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./Reg.css";
import Axios from 'axios';

export default function Reg() {
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: { fname: "", lname: "", email: "", password: "" },
    onSubmit: (formValue) => {
      console.log("Submitted value: ", formValue);
      Axios.post('https://nodeprojectapi.herokuapp.com/register',formValue)
      .then(result=>{
        console.log("Axios resolve response: ",result);
        alert("Registration done");
        navigate('/login')
      })
      .catch(err=>{
        console.log("Axios error: ",err);
        navigate('/registration')
      })
    }
  });
  return (
    <div className="regbackground">
      <div className="regbackground1">
        <h1>Registration</h1>
        <p>To get access your Orders</p>
        <p>Please Register</p>
      </div>
      <div className="regform">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="fname"></label>
          <input
            type="text"
            name="fname"
            placeholder="Enter Your First Name"
            value={formik.values.fname}
            onChange={formik.handleChange}
            className="reginput"
          ></input>
          <br />
          <br />

          <label htmlFor="lname"></label>
          <input
            type="text"
            name="lname"
            placeholder="Enter Your Last Name"
            value={formik.values.lname}
            onChange={formik.handleChange}
            className="reginput"
          ></input>
          <br />
          <br />

          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Id"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="reginput"
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
            className="reginput"
          ></input>
          <br />
          <br />
            <button type="submit" className="reginput1">
              Register
            </button>
        </form>
      </div>
    </div>
  );
}
