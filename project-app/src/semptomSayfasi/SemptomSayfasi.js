import React from "react";
import Semptom from "./Semptom";
import "./SemptomSayfasi.css"


const SemptomSayfasi = () =>{
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
                <input type={"text"} className="InputBox" placeholder="Semptom arayın.."/>
            </div>
            <div className="Semptomlar">
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                <Semptom semptomIsmi="Semptom ismi"/>
                
            </div>
            <div>
                <button className="Button" onMouseOver={onHoverOver} onMouseLeave={onHoverEnd}>Onayla</button>
            </div>
        </div>
        
    </div>
    );
}


export default SemptomSayfasi;

/*
<div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
                <div><input type={"text"} className="InputBox" placeholder="Semptom arayın.."/></div>
*/