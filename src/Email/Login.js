import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Translation from "../footer/Data.json";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const [language, setLanguage] = useState("English");
  const [content, setContent] = useState({});

  const loggedEmail = localStorage.setItem("email","fakru.dilkhush@gmail.com")
  const loggedPassword = localStorage.setItem("password","12345")

  const userEmail = localStorage.getItem('email')
  ?localStorage.getItem('email'):null;

  const userPassword = localStorage.getItem('password')
  ?localStorage.getItem('password') :null;

  useEffect(() => {
   //  console.log(Translation)
    if (language == "English") {
      setContent(Translation.English);
    } else if (language == "Tamil") {
     
      setContent(Translation.Tamil);
    } else if (language == "Hindi") {
      setContent(Translation.Hindi);
    } else if (language == "Arabic") {
      setContent(Translation.Arabic);
    }
  },[content,language]);

  const handleSubmt = (e)=>{
    e.preventDefault();
    if(email===userEmail && password===userPassword){
      toast.success('login success')
      setTimeout(()=>{
        navigate('/mainbody')
      },2000)
     
      setEmail("")
      setPassword("")
    }else{
      toast.error('login error')
      // alert("worong email or password")
      setEmail("")
      setPassword("")
    }

  //   axios.post('http://localhost:6060/login',{email,password})
  //   .then((res)=>{
  //  console.log(res)
  //   }).catch((err)=>{
  //     console.log(err)
    //})
  }
  

  return (
    <>
    <ToastContainer />
      <div className="container">
        <div className="logo media">
          <img src="http://andysoftwares.com/images/logos/A.png" alt="logo" />
        </div>
        <div className="form_box">
        <p style={{fontSize:"5px"}}>email-fakru.dilkhush@gmail.com/pass-12345</p>
          <h1>{content.title}</h1>

          <form onSubmit={handleSubmt}>
            <h3>{content.login}</h3>
            <div className="input-group">
              <div className="input-field">
                <label>{content.email}</label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-field">
                <label>{content.password}</label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="input-field btn-field">
                <button type="submit" >
                  {content.submit}
                </button>
              </div>
            </div>
          </form>
          <div className="forgot_link">
            <Link to="/forgotpassword">Forgot Password</Link>
          </div>
          
        </div>
      </div>
      <div className="link_section">
        <div className="signUp_link"></div>
      </div>

      <div className="allLanguages">
        <button
          value="English"
          onClick={(e) => {
            console.log("onclick english")
            setLanguage(e.target.value);
          }}
        >
          English
        </button>
        <button
          value="Hindi"
          onClick={(e) => {
            setLanguage(e.target.value);
          }}
        >
          Hindi
        </button>

        <button
          value="Tamil"
          onClick={(e) => {
            setLanguage(e.target.value);
          }}
        >
          Tamil
        </button>
        <button
          value="Arabic"
          onClick={(e) => {
            setLanguage(e.target.value);
          }}
        >
          Arabic
        </button>

        <ul>
          <li>
            <a href="javascript:void(0)">…</a>
          </li>
        </ul>
      </div>

      <div className="copyRight">
        <p>Copyright©&nbsp;2023 cPanel, L.L.C.</p>
        <br />
        <a href="https://go.cpanel.net/privacy" target="_blank">
          Privacy Policy
        </a>
      </div>
    </>
  );
};

export default Login;
