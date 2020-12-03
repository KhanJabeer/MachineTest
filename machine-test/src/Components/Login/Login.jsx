import React from "react";
import './Login.css'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";



const Login = () => {

const handleSubmit =(e)=>{
    e.preventDefault()
    alert()
}   

  return(
    <div className="login_content">
        <header>
      <h1>Machine Test</h1>
          <h1>Login</h1>
        </header>

        <form  onSubmit={handleSubmit}>
            <div className="login_fields">
                <input 
                className="input_boxes"
                type="text"  
                placeholder="User name" 
                required />
            </div>

            <div className="login_fields">
                <input 
                className="input_boxes"
                type="password" 
                placeholder="Password"
                required/>
            </div>

            <div className="login_btn">
            <button onClick={handleSubmit}>Login</button>
            </div>
        </form>
    </div>
  )
  }


export default Login;