import React, { useEffect, useState } from "react";
import "./SemptomSayfasi.css"

const Semptom = (props) => {
    let semptomIsmi = props.semptomIsmi
    let onClick = props.onClick
    let isSelected = props.isSelected
    let id = props.id
    console.log("semptom")
    
    return (
             <div className={isSelected ? "SemptomSelected" :"Semptom"} onClick={onClick} id={id}>
                {semptomIsmi}
                <hr/>
                {isSelected ? 
                <>
                <div style={{marginTop: "2%", display: "flex", alignItems: "center"}}>
                    <label style={{color: "white"}}>Kas ağrısı</label>
                    <input type="checkbox" className="InputCheckbox"/>
                </div>
                <div style={{marginTop: "2%", display: "flex", alignItems: "center"}}>
                    <label style={{color: "white"}}>Kas ağrısı</label>
                    <input type="checkbox" className="InputCheckbox"/>
                </div>
                <div style={{marginTop: "2%", display: "flex", alignItems: "center"}}>
                    <label style={{color: "white"}}>Kas ağrısı</label>
                    <input type="checkbox" className="InputCheckbox"/>
                </div>
                </> : <></>}
            </div>
    );
}


export default Semptom;