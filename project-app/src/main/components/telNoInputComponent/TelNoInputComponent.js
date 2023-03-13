import React from "react";
import "./TelNoInputComponent.css"

const TelNoInputComponent = (props) => {
    const { label, onChange } = props
    return (
    <div>
        <div className="InputLabelTel">
            <label>{label}</label>
        </div>
        <div className="InputTel">
            <input type={"text"} className="InputBoxTel" onChange={onChange} placeholder={"(___) - ___ - __"}/>
        </div>
    </div>);

}

export default TelNoInputComponent;

