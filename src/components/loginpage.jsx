import React, { useState } from "react";
import "../styles/login.scss";
import Main_icon from "../assets/person.png";
import Email_icon from "../assets/email.png";  
import password_icon from "../assets/password.png";
import Home from "./home";

const Loginpage = () => {

const[action,setAction]= useState("Login")

  return (
    <div className="Main_Container"> 
      <div className="Header">
        <div className="Text">{action}</div>
        <div className="Underline"></div>
      </div>
      <div className="Inputs">
        {action==="Login"?<div></div>:
        <div className="Input">
            <img src={Main_icon} alt="" />
            <input type="text" placeholder="Name" name="" id="" />
        </div>}
        
        <div className="Input">
            <img src={Email_icon} alt="" />
            <input type="email" placeholder="Email Address" name="" id="" />
        </div>
        <div className="Input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Secured Code!" name="" id="" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="Password_Reset">Forgot Password ?  <span> Click here!!</span></div>}
      

      <div className="Submit_Container"> 
        <div className={action==="Login"?"Submit gray" :"Submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up" ? "Submit gray" :"Submit"} onClick>Login</div>
      </div>
    </div>
  );
};

export default Loginpage;