import React ,{Suspense}from "react";

import { Routes, Route } from "react-router-dom";
import Login from "./Email/Login";
import ForgotPassword from "./component/ForgotPassword";
import MainBody from "./Email/MainBody";
import SignUp from "./Email/Register";
import Register from "./Email/Register";
import { Provider } from "react-redux";
import { store } from "./App/store";




const App = () => {

  return (
    <>
      <Provider store={store}>
        <Routes>
        
          <Route path="/mainbody" exact={true} element={<MainBody />} />
        
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />

        
          <Route path="/" element={<Login />} />
        
        </Routes>
       
        </Provider>
    </>
  );
};

export default App;
