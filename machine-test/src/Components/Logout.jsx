import React,{useEffect,useState} from "react";
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
import './Logout.css'

const Logout = ({ loggedInUser,history }) => {

    const [currentLocation,setCurrentLocation] = useState(null)


    useEffect(() => {
       
        setCurrentLocation(window.location.href)
    },[])

const logout = () => {
    localStorage.setItem("loggedInUser","")
    history.push("/")
  
}

return (
<div className="logout_btn" >

<div className="dash_title">
           <div>
           <Link to="/dashboard" 
           className={`${currentLocation !== null && currentLocation.includes("/dashboard") ? "active_text_heading" :"link_header"}`}>
           Dashboard</Link>
           </div>
           
          {loggedInUser && loggedInUser.role !== "user" && <div>
              <Link to="/usermanage" 
             className={`${currentLocation !== null ? currentLocation.includes("/usermanage") && "active_text_heading" : "link_header" }`}>
             User Management </Link>
           </div>}
           <div>
           <Link to="/todolist" 
           className={`${currentLocation !== null ? currentLocation.includes("/todolist") && "active_text_heading" :"link_header"}`}>
               Todo List</Link>
           </div>
           </div>

<div className="logged_user">{loggedInUser && loggedInUser.name}</div>
 <button onClick={logout}>Log out</button>
</div>
)
}

export default Logout