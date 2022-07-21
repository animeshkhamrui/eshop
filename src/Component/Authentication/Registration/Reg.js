import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import './Reg.css'

export default function Reg() {
  const formik = useFormik({
    initialValues: { fname: "", lname: "", email: "", password: "" },
    onSubmit: (formValue) => {
      console.log("Submitted value: ", formValue);
    },
  });
  return (
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

        <Link to="/login"><button type="submit" className="reginput1">Register</button></Link>
      </form>
    </div>
  );
}
