import React, { useState } from "react";
import "./HastaListele.css"
import MOCKDATA from "../../genel/data/HASTA_MOCK_DATA.json";
import Hasta from "../../components/hasta/Hasta";
import { useHistory } from "react-router-dom";
import Button from "../../components/buton/Button";


const HastaListele = () => {
    const [ searchTerm, setSearchTerm ] = useState("");
    const history = useHistory()
    return (
    <div className="HastaListele">
        <Button name="Geri Git" style={{backgroundColor:"#EED2B1", color:"#C08D50", marginTop:"1%", marginLeft:"15%", float: "left", width: "10%"}} onClickFunction={() => history.goBack()}/>
        <div>
                <input type={"text"} className="SearchHasta" placeholder="Hasta arayın.." onChange={(event) => setSearchTerm(event.target.value)}/>
        </div>
        {MOCKDATA.filter((value) => {
            if (searchTerm == ""){
                return value;
            }else if(value.isim.toLowerCase().includes(searchTerm.toLowerCase())){
                return value;
            }
        }).map((value, key) => {
            return <Hasta hasta={value} key={key}/>
        })}
    </div>
    );
}

export default HastaListele;