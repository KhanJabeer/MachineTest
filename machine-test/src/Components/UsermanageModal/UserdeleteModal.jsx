import React from "react";
import './UsermanageModal.css'



const UserdeleteModal = () => {

    

  return(
    <div className="delete_modal">
     
     <div className="delmodal_title">DELETE USER</div>
    
         <div className="del_content">
        Are You Sure Want to Delete This User?</div>

         <div className="btn_wraps">
        <button className="cancel_btn">No</button>    
        <button className="addedit_btn">Yes</button>
    </div>     
    

    

    

    </div>
  )
  }


export default UserdeleteModal;