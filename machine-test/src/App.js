import React,{useEffect, useState} from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import UserManage from './Components/UserManage/UserManage'
import UserManageModal from './Components/UsermanageModal/UsermanageModal'
import UserdeleteModal from './Components/UsermanageModal/UserdeleteModal'
import "./index.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Users from "./utils/Users";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {

  const [isAuthenticated,setAuthenticated] = useState(null)
  const [users,setUsers] = useState([])
  const [loggedInUser,setLoggedInUser] = useState(null)

  useEffect(() => {
      if(!localStorage.userDetails) {
        localStorage.setItem("users",JSON.stringify(Users))
        const userDetails = JSON.parse(localStorage.getItem("users"))
        setUsers(userDetails)
      }

    
      if(Object.keys(localStorage.loggedInUser).length) {
         setAuthenticated(false)
      }else {
        setAuthenticated(true)
        const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"))
        setLoggedInUser(loggedUser)
      }
  },[])

  const changeAuth = () => {
    setAuthenticated(true)
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"))
    setLoggedInUser(loggedUser)
  }

  return(
    <div className="App">
    <Router> 
            <Route exact path="/login" render={(props) => <Login {...props} changeAuth={changeAuth} users={users} /> }/> 
            <PrivateRoute path="/usermanage" component={UserManage} isAuthenticated={isAuthenticated} />
            <PrivateRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} loggedInUser={loggedInUser} />
    </Router> 
     </div>
  )
  }


export default App;