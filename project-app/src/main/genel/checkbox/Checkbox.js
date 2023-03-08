import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
    const { value, id, onChecked } = props
    return (
    <div className="Checkbox" key={id}>
        <input type="checkbox" id={id + value} onChange={onChecked}/>
        <label htmlFor={id + value}>{value}</label>
    </div>
    );

}

export default Checkbox;