import React from "react";
import { useHistory } from "react-router-dom";
import "./HekimGirisSayfasi.css";
import Button from "../../genel/buton/Button";

const HekimGirisSayfasi = () => {
    const history = useHistory();

    const checkIsTckn = (event) => {
        const value = event.target.value
        const valueLength = value.length
        if(!+value[valueLength - 1] || valueLength > 11){
            event.target.value = value.slice(0, valueLength - 1)
        }
    }

    return (
    <div className="HekimGirisSayfasi">
        <div className="InputList">
            <div className="InputLabel">
                <label>TC Kimlik No</label>
            </div>
            <div className="Input">
                <input type={"text"} className="InputBox" onChange={checkIsTckn}/>
            </div>
            <div className="InputLabel">
                <label>Şifre</label>
            </div>
            <div className="Input">
                <input type={"password"} className="InputBox"/>
            </div>
            <div className="Input">
                <Button name="Geri Git" style={{backgroundColor:"#EED2B1", color:"#C08D50", marginTop:"5%", marginLeft:"17.5%", float: "left"}}  onClickFunction={() => history.goBack()}/>
                <Button name="Giriş Yap" style={{backgroundColor:"#3F72AF", color:"#112D4E", marginTop:"5%", marginLeft:"5%", float: "left"}} onClickFunction={() => history.push("/yeniHasta")}/>
            </div>
        </div>
    </div>
    );
}

export default HekimGirisSayfasi;

