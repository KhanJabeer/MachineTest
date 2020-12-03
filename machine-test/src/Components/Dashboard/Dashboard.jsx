import React from "react";
import './Dashboard.css'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import avatar from '../../images/avatar.png'


const Dashboard = () => {

   

  return(
    <div>

      
       <header>
           <div className="dash_title">
             <div>Welcome To Dashboard</div>

           <div className="logout_btn" >
             <div className="logged_user">user Name</div>
              <button>Log out</button>
           </div>

           </div>
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