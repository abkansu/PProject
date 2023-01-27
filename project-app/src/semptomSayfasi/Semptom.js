import React from "react";
import "./SemptomSayfasi.css"

const Semptom = (props) => {
    let semptomIsmi = props.semptomIsmi
    return (
    <div className="Semptom">
        <div style={{color: "#112D4E", marginLeft: "1%"}}>{semptomIsmi}</div>
    </div>
    );
}


export default Semptom;