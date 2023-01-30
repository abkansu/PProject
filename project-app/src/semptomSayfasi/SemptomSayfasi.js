import React, { useState } from "react";
import Semptom from "./Semptom";
import "./SemptomSayfasi.css"
import MOCKDATA from "./MOCK_DATA.json"

const SemptomSayfasi = () =>{
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ datalist, setDatalist ] = useState(MOCKDATA.map((value, key) => {return [value.first_name, false];}));
    const onClickSemptom = (event) => {
        setDatalist(current => current.map((value, key) => {
            if (value[0] == (event.target.innerHTML)){
                return [value[0], !value[1]];
            }else {
                return value;
            }}
        ).sort((a, b) => b[1] - a[1]));
    }
    const onHoverOver = (event) => {
        event.target.style.backgroundColor = "#112D4E";
        event.target.style.color = "#3F72AF";
        event.target.style.scale = 1.1;
    } 
    const onHoverEnd = (event) => {
        event.target.style.backgroundColor = "#3F72AF";
        event.target.style.color = "#112D4E";
        event.target.style.scale = 1.0;
    }
    return(
    <div className="SemptomSayfasi">
        <div className="SearchBar" >
            <div>
                <input type={"text"} className="InputBox" placeholder="Semptom arayın.." onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
            <div className="Semptomlar">
                {datalist.filter((value) => {
                    if (searchTerm == ""){
                        return value;
                    }else if(value[0].toLowerCase().includes(searchTerm.toLowerCase())){
                        return value;
                    }
                }).map((value, key) => {
                    return <Semptom semptomIsmi={value[0]} isSelected={value[1]} onClick={onClickSemptom} key={value[0]}/>
                })}
                
            </div>
            <div>
                <button className="Button" onMouseOver={onHoverOver} onMouseLeave={onHoverEnd}>Onayla</button>
            </div>
        </div>
        
    </div>
    );
}


export default SemptomSayfasi;
