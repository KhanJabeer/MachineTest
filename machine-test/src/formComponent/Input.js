import React from "react";


const Input = ({label,required,value,placeholder,changeData,errmsg,type,className}) => {
    console.log("errr",errmsg)
    return(
        <div>
            <div className="field_label">
            <label>{label && label}</label>
                 {required && <span>*</span>}
            </div>

            <div>
            <input className={className && className} type={type && type} value={value && value} 
            placeholder={placeholder && placeholder} onChange={(e) => changeData && changeData(e.target.value) } />
            <div>
                {errmsg && errmsg}
            </div>
            </div>
        </div>
    )
}

export default Input;