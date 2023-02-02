import React from "react";
import "./GirisSayfasi.css";
import Button from "../genel/buton/Button";
import { useHistory } from "react-router-dom";


const GirisSayfasi = () => {
    const history = useHistory();

    const checkIsNumber = (event) => {
        const value = event.target.value
        const valueLength = value.length
        if(!+value[valueLength - 1] || valueLength > 11){
            event.target.value = value.slice(0, valueLength - 1)
        }
    }

    const checkIsLetter = (event) => {
        const value = event.target.value
        const re = /[A-Za-z]/g
        try{
            event.target.value = value.match(re).join('')
        }catch(e){
            event.target.value = ''
        }
        
    }

    return (
    <div className="GirisSayfasi">
        <div className="Inputs">
            <div className="InputLabel">
                <label>İsim</label>
            </div>
            <div className="Input">
                <input type={"text"} className="InputBox" onChange={checkIsLetter}/>
            </div>
            <div className="InputLabel">
                <label>Soyisim</label>
            </div>
            <div className="Input">
                <input type={"text"} className="InputBox" onChange={checkIsLetter}/>
            </div>
            <div className="InputLabel">
                <label>TC Kimlik No</label>
            </div>
            <div className="Input">
                <input type={"text"} className="InputBox" onChange={checkIsNumber}/>
            </div>
            <div className="Input">
                <Button name="Geri Git" backgroundColor="#EED2B1" color="#C08D50" marginTop="10%" marginLeft="25%" onClickFunction={() => history.push("/")}/>
                <Button name="Onayla" backgroundColor="#3F72AF" color="#112D4E" marginTop="2%" marginLeft="25%" onClickFunction={() => history.push("/semptom")}/>
            </div>
        </div>
    </div>
    );
}

export default GirisSayfasi;


