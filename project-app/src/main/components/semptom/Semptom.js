import React, { useEffect, useState } from "react";
import "./Semptom.css";
import Button from "../buton/Button";
import Checkbox from "../checkbox/Checkbox";

const Semptom = (props) => {
    let semptomIsmi = props.semptomIsmi;
    let onClick = props.onClick;
    let onClickIptal = props.onClickIptal;
    let isSelected = props.isSelected;
    let id = props.id;
    const [dumbList, setDumbList ] = useState([
        {name:"Kas ağrısı", isChecked: false},
        {name:"Kasta çekme", isChecked: false},
        {name:"Kasta sünme", isChecked: false}
    ]);
    const sortFunction = (a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }
    const onChecked = (event) => {
        const element = dumbList.find(value => event.target.id == semptomIsmi + value.name);
        element.isChecked = event.target.checked
        setDumbList([...dumbList.filter(value => value.name != element.name), element].sort(sortFunction))
    }
    return (
             <div className={isSelected ? "SemptomSelected" :"Semptom"} onClick={onClick} id={id}>
                {semptomIsmi}
                {isSelected ? 
                <Button name="İptal"
                 style={{backgroundColor:"#F9F7F7", color:"#112D4E", marginTop: "0%",
                  marginLeft: "0%", marginRight: "1%", float: "right", width: "10%", height: "25px"}} 
                 onClickFunction={onClickIptal}/>
                : <></>}
                <hr key={semptomIsmi}/>
                {isSelected ? 
                <>
                {dumbList.sort(sortFunction).map((value, key) => {
                    return (<Checkbox value={value.name} onChecked={onChecked} id={semptomIsmi} key={key}/>)   
                })}
                </> : <></>}
            </div>
    );
}


export default Semptom;