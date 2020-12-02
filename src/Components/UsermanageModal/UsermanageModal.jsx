import React from "react";
import './UsermanageModal.css'



const UserManageModal = () => {

    

  return(
    <div className="">
     
     <div className="grid-container">

     <div className="grid-item">
         <div>Name</div>
         <input className="userdata_fields" type="text" required/>
     </div>

     <div className="grid-item">
         <div>Email</div>
         <input className="userdata_fields" type="text" required/>
     </div>

     <div className="grid-item">
         <div>Address</div>
         <input className="userdata_fields" type="text" required/>
     </div>

     <div className="grid-item">
         <div>Country</div>
         <input className="userdata_fields" type="text" required/>
     </div>

     <div className="grid-item">
         <div>Status</div>
         <select className="status_fields" defaultValue="status" required>
            <option value="volvo">Active</option>
            <option value="saab">In-Active</option>
        </select>     
        </div>

    </div>

    <div className="btn_wraps">
        <button className="cancel_btn">Cancel</button>    
        <button className="addedit_btn">Add</button>
    </div>
    </div>
  )
  }


export default UserManageModal;