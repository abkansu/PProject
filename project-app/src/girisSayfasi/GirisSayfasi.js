import React from "react";
import { ReactDOM } from "react";
import "./GirisSayfasi.css"


const GirisSayfasi = () => {
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
    return (
    <div className="GirisSayfasi">
        <div className="Inputs">
            <div className="InputLabel">
                <label>İsim</label>
            </div>
            <div className="Input">
                <input type={"text"} className="InputBox"/>
            </div>
            <div className="InputLabel">
                <label>Soyisim</label>
            </div>
            <div className="Input">
                <input type={"text"} className="InputBox"/>
            </div>
            <div className="InputLabel">
                <label>TC Kimlik No</label>
            </div>
            <div className="Input">
                <input type={"text"} className="InputBox"/>
            </div>
            <div className="Input">
                <button className="Button" onMouseOver={onHoverOver} onMouseLeave={onHoverEnd}>Onayla</button>
            </div>
        </div>
    </div>
    );
}

export default GirisSayfasi;


