import React from "react";
import { ReactDOM } from "react";
import "./GirisSayfasi.css";
import Button from "../genel/buton/Button";


const GirisSayfasi = () => {
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
                <Button name="Geri Git" backgroundColor="#EED2B1" color="#C08D50" marginTop="10%" marginLeft="25%"/>
                <Button name="Onayla" backgroundColor="#3F72AF" color="#112D4E" marginTop="2%" marginLeft="25%"/>
            </div>
        </div>
    </div>
    );
}

export default GirisSayfasi;


