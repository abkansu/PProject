import React, { useState } from "react";
import Semptom from "./Semptom";
import "./SemptomSayfasi.css";
import MOCKDATA from "./MOCK_DATA.json";
import Button from "../genel/buton/Button";

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
                <Button name="Geri Git" backgroundColor="#EED2B1" color="#C08D50" marginTop="2%" marginLeft="25%"/>
                <Button name="Onayla" backgroundColor="#3F72AF" color="#112D4E" marginTop="1%" marginLeft="25%"/>
                
            </div>
        </div>
        
    </div>
    );
}


export default SemptomSayfasi;
