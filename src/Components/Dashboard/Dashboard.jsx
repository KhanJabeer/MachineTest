import React from "react";
import './Dashboard.css'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";



const Dashboard = () => {

   

  return(
    <div>
       <header>
           <h1>Welcome To Dashboard</h1>
        </header>

           <div className="dash_content">

           <div className="userstatus_header">User List<span>Status</span></div>

             <div className="users_list">
                 
                   <div className="user_status">Google<span>In-Active</span></div>
                   <div className="user_status">Apple<span>Active</span></div>
                   <div className="user_status">Amazon<span>In-Active</span></div>
                   <div className="user_status">Walmart<span>In-Active</span></div>
                   <div className="user_status">Samsung<span>In-Active</span></div>

            </div>

           </div>
    </div>
  )
  }


export default Dashboard;