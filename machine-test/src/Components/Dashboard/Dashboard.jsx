import React,{useEffect,useState} from "react";
import './Dashboard.css'
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
import Pagination from '../Pagination/Pagination';


const Dashboard = ({ loggedInUser,history }) => {

  console.log("sdakjfhsalkjdf",loggedInUser)

  const [userDetails,setUserDetails] = useState([])

  const [currId,setCurrId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

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
  history.push("/")
}

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = userDetails && userDetails.slice(indexOfFirstPost, indexOfLastPost);
console.log(currentPage,postsPerPage)
  // Change page
  const dashPage = dashPage => setCurrentPage(dashPage);
 

  return(
    <div>      
       <header>
           <div className="dash_title">
           <div>
           <Link to="/dashboard" className="link_header">Dashboard</Link>
           </div>
             <div>
           <Link to="/post" className="link_header">Users List</Link>
           </div>
       {loggedInUser && loggedInUser.role !== "user" && <div>
              <Link to="/usermanage" className="link_header">User Management</Link>
           </div>}
         
         
           <div className="logout_btn" >
             <div className="logged_user">{loggedInUser && loggedInUser.name}</div>
              <button onClick={logout}>Log out</button>
           </div>

           </div>
        </header>

           <div className="dash_content">

           <div className="userstatus_header">User List<span>Status</span></div>
            {currentPosts && currentPosts.length > 0 && currentPosts.map((user) => {
              return(
                user.role === "user" && user.userId !== currId && <div className="user_status">{user.name}<span>{user.status}</span></div>
              )
            })}
           </div>

           <Pagination
        postsPerPage={postsPerPage}
        totalPosts={userDetails && userDetails.length}
        paginate={dashPage}
      />

    </div>
  )
  }


export default Dashboard;