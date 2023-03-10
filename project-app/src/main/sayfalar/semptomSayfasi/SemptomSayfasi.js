import React, { useState } from "react";
import Semptom from "../../components/semptom/Semptom";
import "./SemptomSayfasi.css";
import MOCKDATA from "../../genel/data/SEMPTOM_MOCK_DATA.json";
import Button from "../../components/buton/Button";
import { useHistory } from "react-router-dom";

const SemptomSayfasi = () =>{
    const history = useHistory();
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ datalist, setDatalist ] = useState(MOCKDATA.map((value, key) => {return [value.first_name, false];}));
    const onClickSemptom = (event) => {
        setDatalist(current => current.map((value, key) => {
            if (value[0] == (event.target.id) && value[1] == false){
                return [value[0], !value[1]]; 
            }else {
                return value;
            }}
        ).sort((a, b) => b[1] - a[1]));
    }
    const onClickIptal = (event) => {
            setDatalist(current => current.map((value, key) => {
                if (value[0] == (event.target.offsetParent.id) && value[1] == true){
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
                    return <Semptom semptomIsmi={value[0]} isSelected={value[1]} onClick={onClickSemptom} onClickIptal={onClickIptal} key={value[0]} id={value[0]}/>
                })}
                
            </div>
            <div>
                <Button name="Geri Git" style={{backgroundColor:"#EED2B1", color:"#C08D50", marginTop:"3%", marginLeft:"17.5%", float: "left"}} onClickFunction={() => history.goBack()}/>
                <Button name="Onayla" style={{backgroundColor:"#3F72AF", color:"#112D4E", marginTop:"3%", marginLeft:"5%", float: "left"}} onClickFunction={() => history.push("/")}/>
            </div>
        </div>
        
    </div>
    );
}


export default SemptomSayfasi;
