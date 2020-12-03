import React,{useEffect,useState} from "react";
import './UserManage.css'
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import { MdModeEdit, MdDelete } from "react-icons/md";
import Users from "../../utils/Users";
import UserManageModal from "../UsermanageModal/UsermanageModal";
import UserdeleteManage from "../UsermanageModal/UserdeleteModal";

import Modal from '@material-ui/core/Modal';

const UserManage = () => {

 
  const [insertopen,setinsertopen] = useState(false)
  const [editopen,seteditopen] = useState(false)

  const [opendelete,setopendelete] = useState(false)
  const [userDetails,setUserDetails] = useState([]);
  const [loggedInUser,setLoggedInUser] = useState(null)

  const [userId,setUserId] = useState(null)

  const [open, setOpen] = useState(false);
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
        <div className="useradd_btn"><button onClick={addModal}>Add User</button></div>
</div>
    <div className="users_wrap">
            {userDetails && userDetails.length > 0 && userDetails.map((user) => {
              return(
              user.role === "user" && user.userId !== currId &&
                <div className="users">
                <div>{user.name}</div>
                <div>
                  <MdModeEdit  className="edit_icon" onClick={() => editModal(user.userId)}/>
                  {loggedInUser.role === "root" && <MdDelete className="delete_icon" onClick={() => deleteOpen(user.userId)}/>}
                </div>
                </div>
              )
            })}
             
          </div>
        </div>

        {
        open && 
         <Modal 
         open={open}
         onClose={handleClose}
         title={insertopen ? "Add User" : "Edit User"}
         >
        <UserManageModal  add={insertopen} onClose={handleClose} users={userDetails} userId={userId} />

        </Modal>
        }

      {
        opendelete && 
         <Modal 
         open={deleteOpen}
         onClose={handleClose}

         >

        <UserdeleteManage onClose={handleClose} users={userDetails}  userId={userId} loadUserDetails={loadUserDetails} />

        </Modal>
        }

    </div>
  )
  }


export default UserManage;