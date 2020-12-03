import React,{useEffect,useState} from "react";
import './UserManage.css'
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import { MdModeEdit, MdDelete } from "react-icons/md";
import Users from "../../utils/Users";
import UserManageModal from "../UsermanageModal/UsermanageModal";


const UserManage = () => {

 
  const [insertopen,setinsertopen] = useState(false)
  const [opendelete,setopendelete] = useState(false)
  const [userDetails,setUserDetails] = useState([]);

  console.log("sadfgsdaf",Users)

  useEffect(() => {
      loadUserDetails()
  },[])


  const loadUserDetails = () => {
    if(localStorage.users) {
      const user = JSON.parse(localStorage.getItem("users"))
      setUserDetails(user)
    }
  }

  const modalOpen = ()=>{
    alert("modal")
    setinsertopen(true)
  }

  const deleteOpen = ()=>{
    alert("Delete")
    setopendelete(true)
  }

  return(
    <div className="">
       <header>
         <h1>User Management</h1>
        </header>

        <div className="usermanage_content">

        <div className="logout_btn" >
              <Link to="/dashboard">DashBoard</Link>
           </div>

        <div className="users_header">
          <div>User List</div>
        <div className="useradd_btn"><button onClick={modalOpen}>Add User</button></div>
</div>
    <div className="users_wrap">
            {userDetails && userDetails.length > 0 && userDetails.map((user) => {
              return(
              user.role === "user" && 
                <div className="users">
                <div>{user.name}</div>
                <div>
                  <MdModeEdit  className="edit_icon" onClick={modalOpen}/>
                  <MdDelete className="delete_icon" onClick={deleteOpen}/>
                </div>
                </div>
              )
            })}
             
          </div>
        </div>
        {insertopen && <UserManageModal />}
    </div>
  )
  }


export default UserManage;