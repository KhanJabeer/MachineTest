import React,{useEffect,useState} from "react";
import './Dashboard.css'
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
import Pagination,{PaginationHelper} from '../Pagination/Pagination';


const Dashboard = ({ loggedInUser,history }) => {


  const [userDetails,setUserDetails] = useState([])

  const [currId,setCurrId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [paginationIndex,updatePaginationIndex] =useState(0);
  

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
  const currentPosts = userDetails && userDetails.filter((user)=>user.role === "user" && user.userId !== currId).slice            (indexOfFirstPost, indexOfLastPost);

  // Change page
  const setpaginate = (pageNumber,click_data) => {

    var gethelperData=PaginationHelper.checkingPaginationProcess(pageNumber,click_data,null,userDetails,postsPerPage,currentPage);
    if(gethelperData.pageNumber){
      setCurrentPage(gethelperData.pageNumber);
    }
    if(gethelperData.totalmovedpage>=0){
      updatePaginationIndex(gethelperData.totalmovedpage);
    }

  }

  const updatePaginationData=(data,totalnumbers)=>{

    updatePaginationIndex(data);
    var gethelperData=PaginationHelper.checkingPaginationProcess((data*5)+1,null,totalnumbers,userDetails,postsPerPage,currentPage);
    if(gethelperData.pageNumber){
      setCurrentPage(gethelperData.pageNumber);
    }

  }

  return(
    <div>      
       <header className="dash_heads">
           <div className="dash_title">
           <div>
           <Link to="/dashboard" className="link_header">Dashboard</Link>
           </div>
           
          {loggedInUser && loggedInUser.role !== "user" && <div>
              <Link to="/usermanage" className="link_header">User Management</Link>
           </div>}
           <div>
           <Link to="/todolist" className="link_header">Todo List</Link>
           </div>
           </div>
           <div>
           <div className="logout_btn" >
             <div className="logged_user">{loggedInUser && loggedInUser.name}</div>
              <button onClick={logout}>Log out</button>
           </div>

           </div>
        </header>

           <div className="dash_content">

           <div className="userstatus_header">
             <div>User List</div>
             <div>Status</div>
             </div>
            {currentPosts && currentPosts.length > 0 && currentPosts.map((user) => {
              return(
                 <div className="users"><div className="user_names">{user.name}</div><div className="status">{user.status}</div></div>
              )
            })}
           </div>

           <Pagination
            postsPerPage={postsPerPage}
            totalPosts={userDetails && userDetails.length}
            paginationIndex={paginationIndex}
            udpatePageNumber={(i)=>setCurrentPage(i)}
            paginate={(data)=>setpaginate(data,'click')}
            updatePaginationIndex={(data,totalnumbers)=>updatePaginationData(data,totalnumbers)}
            pageNo={currentPage && currentPage}
            />

    </div>
  )
  }


export default Dashboard;