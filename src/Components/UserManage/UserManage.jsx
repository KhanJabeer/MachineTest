import React,{useEffect,useState} from "react";
import './UserManage.css'
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import { MdModeEdit, MdDelete } from "react-icons/md";
import Users from "../../utils/Users";
import UserManageModal from "../UsermanageModal/UsermanageModal";
import UserdeleteManage from "../UsermanageModal/UserdeleteModal";
import Pagination from '../Pagination/Pagination';


const UserManage = () => {

 
  const [insertopen,setinsertopen] = useState(false)
  const [editopen,seteditopen] = useState(false)

  const [opendelete,setopendelete] = useState(false)
  const [userDetails,setUserDetails] = useState([]);
  const [loggedInUser,setLoggedInUser] = useState(null)

  const [userId,setUserId] = useState(null)

  const [open, setOpen] = useState(false);
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
      setLoggedInUser(user)
      setCurrId(user.userId)
    }
  }

  const addModal = ()=> {
    setOpen(true);
    setinsertopen(true)
    seteditopen(false)

  }

  const editModal = (userId)=> {
    setUserId(userId)
    setOpen(true)
    seteditopen(true)
    setinsertopen(false)
  }

  const deleteOpen = (userId)=>{
    setUserId(userId)
    setopendelete(true)
  }


  const handleClose =()=>{
    setOpen(false);
    setinsertopen(false)
    seteditopen(false)
    setopendelete(false)
}

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = userDetails && userDetails.filter((user)=>user.role === "user" && user.userId !== currId).slice
  (indexOfFirstPost, indexOfLastPost);
  console.log(currentPage,postsPerPage)

  // Change page
  const managePage = managePage => setCurrentPage(managePage);


  return(
    <div>
       <header className="usermanage_heads">
         <div className="usermanage_title">
        
         <Link to="/dashboard" className="link_header">DashBoard</Link>
         <Link to="/post" className="link_header">Users List</Link>
         {loggedInUser&& loggedInUser.role !== "user" && <Link to="/usermanage" className="link_header">User Management</Link>}
        </div>
        <div>
         {loggedInUser && (loggedInUser.role === "root" ||  "admin") &&<div className="useradd_btn">
           <button onClick={addModal}>Add User</button>
         </div>}
         </div>
        </header>
     
        <div className="usermanage_content">
      
        <div className="usermanage_header">User List<span>Action</span></div>
            {currentPosts && currentPosts.length > 0 && currentPosts.map((user) => {
              return(
              
                <div className="users">
                <div className="user_names">{user.name}</div>
                <div className="action_icons">
                {(loggedInUser.role === "root" ||  "admin") && <MdModeEdit  className="edit_icon" onClick={() => editModal(user.userId)}/>}
                  {loggedInUser.role === "root" && <MdDelete className="delete_icon" onClick={() => deleteOpen(user.userId)}/>}
                </div>
                </div>
              )
            })}
             
         
        </div>

        {
        open && 
         <div 
         open={open}
         onClose={handleClose}
         title={insertopen ? "Add User" : "Edit User"}
         className={open == true ? "modal_open" : "modal_close" }
         >
           
        <UserManageModal  add={insertopen} onClose={handleClose} users={userDetails} userId={userId} />

        </div>
        }

      {
        opendelete && 
         <div 
         open={deleteOpen}
         onClose={handleClose}
         className={opendelete == true ? "modal_open" : "modal_close" }         >

        <UserdeleteManage onClose={handleClose} users={userDetails}  userId={userId} loadUserDetails={loadUserDetails} />

        </div>
        }

            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={userDetails && userDetails.length}
            paginate={managePage}
            paginationIndex={paginationIndex}
            updatePaginationIndex={(data)=>updatePaginationIndex(data)}
            udpatePageNumber={(i)=>setCurrentPage(i)}
            pageNo={currentPage && currentPage}
            />

    </div>
  )
  }


export default UserManage;