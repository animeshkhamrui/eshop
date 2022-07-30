import React from "react";
import "./Contact.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailIcon from '@mui/icons-material/Mail';

export default function Contact() {
  return (
    <div className="contactbackground">
      <div className="contactbackground1">
        <h3 style={{marginBottom:"20px", color:"white"}}>Send us a message</h3>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <br />
          <br />
          <input type="email" name="email" placeholder="Email" />
          <br />
          <br />
          <input type="text" name="subject" placeholder="Subject" />
          <br />
          <br />
          <textarea name="message" placeholder="Message" style={{width:"52%"}} />
          <br />
          <br />
          <input type="submit" value="Send Message"/>
        </form>
      </div>
      <div className="contactbackground2">
        <h3 style={{marginBottom:"30px"}}>Contact Us</h3>
        <p>We're open for any suggestion or just have a chat</p>
        <p>
          <FmdGoodIcon style={{marginRight:"10px"}}/>Address:-
          Eshop internet Private Limited, Bargachia,Howrah,711404 West
          Bengal,India
        </p>
        <p><AddIcCallIcon style={{marginRight:"10px"}}/>Mobile:- +917407630373</p>
        <p><MailIcon style={{marginRight:"10px"}}/>Email:- khamruianimesh176@gmail.com</p>
      </div>
    </div>
  );
}
