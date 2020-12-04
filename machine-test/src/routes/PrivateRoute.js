import React,{useState,useEffect} from "react";
import {Route,Redirect,withRouter} from "react-router-dom";


const PrivateRoute = ({ component:Component,isAuthenticated,loggedInUser,history,...rest }) => {

  console.log("sdfjksdhfjsf",loggedInUser)
    useEffect(() => {
    loggedInUser && window.location.pathname === "/usermanage" && loggedInUser.role === "user" && history.push("/dashboard")
    },[loggedInUser,history])

return(
    <Route 
    {...rest} 
    render={ (props) => !isAuthenticated && isAuthenticated !== null ? 
    (<Redirect to="/" />) 
     : 
    (
      
      <Component {...props} loggedInUser={loggedInUser} />
    ) 

     }
     />
)
   

    }
           
               


export default withRouter(PrivateRoute);
