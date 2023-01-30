import React, { useEffect, useState } from "react";
import "./SemptomSayfasi.css"

const Semptom = (props) => {
    let semptomIsmi = props.semptomIsmi
    let onClick = props.onClick
    let isSelected = props.isSelected

    
    return (
    <div className={isSelected ? "SemptomSelected" :"Semptom"} onClick={onClick}>
        {semptomIsmi}
    </div>
    );
}


export default Semptom;