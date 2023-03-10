import React from "react";
import "./TextInputComponent.css";

const TextInputComponent = (props) => {
    const { label, type, onChange } = props
    return (
    <div>
        <div className="InputLabelText">
            <label>{label}</label>
        </div>
        <div className="InputText">
            <input type={type ? type : "text"} className="InputBoxText" onChange={onChange}/>
        </div>
    </div>
    );
}

export default TextInputComponent;