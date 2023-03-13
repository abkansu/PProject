import React from "react";
import "./TarihInputComponent.css"

const TarihInputComponent = (props) => {
    const { label, onChange } = props
    return (
        <div>
            <div className="InputLabelTarih">
                <label>{label}</label>
            </div>
            <div className="InputTarih">
                <input type={"date"} className="TarihValue" onChange={onChange}/>
            </div>
        </div>
    );
}


export default TarihInputComponent;