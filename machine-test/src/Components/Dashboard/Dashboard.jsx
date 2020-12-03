import React,{useEffect,useState} from "react";
import './Dashboard.css'
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
import avatar from '../../images/avatar.png'


const Dashboard = ({ loggedInUser,history }) => {

  console.log("sdakjfhsalkjdf",loggedInUser)

  const [userDetails,setUserDetails] = useState([])

  const [currId,setCurrId] = useState(null)

  useEffect(() => {
    loadUserDetails()
},[])


const loadUserDetails = () => {
  if(localStorage.users) {
    const user = JSON.parse(localStorage.getItem("users"))
    setUserDetails(user)
  }

  if(localStorage.loggedInUser) {
    const user = JSON.parse(localStorage.getItem("loggedInUser"))
    setCurrId(user.userId)
  }
}


const logout = () => {
  localStorage.setItem("loggedInUser","")
  history.push("/login")
}

   

  return(
    <div>      
       <header>
           <div className="dash_title">
             <div>Welcome To Dashboard</div>

             <div className="logout_btn" >
              <Link to="/usermanage">User Management</Link>
           </div>

           <div className="logout_btn" >
             <div className="logged_user">{loggedInUser && loggedInUser.name}</div>
              <button onClick={logout}>Log out</button>
           </div>

           </div>
        </header>

           <div className="dash_content">

           <div className="userstatus_header">User List<span>Status</span></div>
            {userDetails && userDetails.length > 0 && userDetails.map((user) => {
              return(
                user.role === "user" && user.userId !== currId && <div className="user_status">{user.name}<span>{user.status}</span></div>
              )
            })}
           </div>
    </div>
  )
  }


export default Dashboard;