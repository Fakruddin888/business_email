import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

const Register = async (e) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  try {
    await axios
      .post("http://localhost:8000/", {
        email,
        password,
      })
      .then((res) => {
        if ((res.data = "exist")) {
          alert("user already exist");
        } else if ((res.data = "notexist")) {
          history("/mainbody");
        }
      });
  } catch (e) {
    console.log(e);
  }

  const [passshow, setPassShow] = useState(false);
  const [inputdata, setInputdata] = useState({
    fname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, password } = inputdata;
    if (fname === "") {
      toast.error("Enter your Name");
    } else if (email === "") {
      toast.error("Enter youre mail");
    } else if (!email.includes("@")) {
      toast.error("Enter valid Email");
    } else if (password === "") {
      toast.error("Enter your password");
    } else if (password.length < 6) {
      toast.error("password length minimum 6 character");
    } else
    //  {
      // const response = await registerfunction(inputdata);
      // console.log(response);
      // if (response.status === 200) {
      //   setInputdata({ ...inputdata, fname: "", email: "", password: "" });
       
      // }
   {
        // toast.error(response.response.data.error);
      }
    }


  return (
    <>
      <div className="SignUp_container">
        <h3>Sign Up</h3>
        <div className="form_box">
          <form action="POST">
            <div className="signUp_group">
              <div className="input-field">
                <label>UserName</label>
                <input
                  type="text"
                  name="fname"
                  value={inputdata.fname}
                  placeholder="username"
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={inputdata.email}
                  placeholder="email"
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label>password</label>
                <div className="password_div">
                  <input
                    type={!passshow ? "password" : "text"}
                    name="password"
                    value={inputdata.password}
                    placeholder="password"
                    onChange={handleChange}
                  />
                  <div
                    className="showPass"
                    onClick={() => setPassShow(!passshow)}
                  >
                    {!passshow ? "Show" : "Hide"}
                  </div>
                </div>
              </div>

              <div className="input-field">
                <button className="btn" onClick={handleSubmit}>
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Register;
