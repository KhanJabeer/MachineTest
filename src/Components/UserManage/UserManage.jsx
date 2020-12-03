import React,{useEffect,useState} from "react";
import './UserManage.css'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { MdModeEdit, MdDelete } from "react-icons/md";


const UserManage = () => {

  const [insertopen,setinsertopen] = useState(false)
  const [opendelete,setopendelete] = useState(false)

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

        <div className="users_header">
          <div>User List</div>
        <div className="useradd_btn"><button onClick={modalOpen}>Add User</button></div>
</div>
    <div className="users_wrap">
          <div className="users">
            <div>Google</div>
            <div>
            <MdModeEdit  className="edit_icon" onClick={modalOpen}/>
            <MdDelete className="delete_icon" onClick={deleteOpen}/>
            </div>
          </div>

          <div className="users">
            <div>Amazon</div>
            <div>
            <MdModeEdit  className="edit_icon" onClick={modalOpen}/>
            <MdDelete className="delete_icon" onClick={deleteOpen}/>
            </div>
          </div>

          <div className="users">
            <div>Space X</div>
            <div>
            <MdModeEdit  className="edit_icon" onClick={modalOpen}/>
            <MdDelete className="delete_icon" onClick={deleteOpen}/>
            </div>
          </div>

          <div className="users">
            <div>Reliance</div>
            <div>
            <MdModeEdit  className="edit_icon" onClick={modalOpen}/>
            <MdDelete className="delete_icon" onClick={deleteOpen}/>
            </div>
          </div>

          <div className="users">
            <div>Apple</div>
            <div>
            <MdModeEdit  className="edit_icon" onClick={modalOpen}/>
            <MdDelete className="delete_icon" onClick={deleteOpen}/>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
  }


export default UserManage;