import React from "react";
import "./TarihInputComponent.css"

const TarihInputComponent = (props) => {
    const { label } = props
    return (
        <div>
            <div className="InputLabelTarih">
                <label>{label}</label>
            </div>
            <div className="InputTarih">
                <input type={"date"} className="TarihValue"/>
            </div>
        </div>
    );
}


export default TarihInputComponent;