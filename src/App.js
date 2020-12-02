import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import UserManage from './Components/UserManage/UserManage'
import UserManageModal from './Components/UsermanageModal/UsermanageModal'
import UserdeleteModal from './Components/UsermanageModal/UserdeleteModal'



import "./index.css";
import "./App.css";


const App = () => {

  return(
    <div className="App">
      <header><h1>Machine Test</h1></header>

<Login />
   <Router> 
   <Route path="/usermanage" component={UserManage} />
   <Route path="/dashboard" component={Dashboard} />
  </Router> 
     </div>
  )
  }


export default App;