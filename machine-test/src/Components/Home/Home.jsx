import React from "react";
import './Home.css'
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";




const Home = () => {

   

  return(
    <div>

    <div className="header_btns">
    
    <Link to="dashboard">DashBoard</Link>
    <Link to="usermangage">User Manage</Link>
    </div>

    <div className="home_page">
          React is an open-source, front end, JavaScript library for building user interfaces or UI components. 
          It is maintained by Facebook and a community of individual developers and companies. 
          React can be used as a base in the development of single-page or mobile applications.
    </div>
    </div>
  )
  }


export default Home;