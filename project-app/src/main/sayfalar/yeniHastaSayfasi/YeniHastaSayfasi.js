import React from "react";
import "./YeniHastaSayfasi.css";
import { useHistory } from "react-router-dom";
import ViewComponent from "../../components/viewComponent/ViewComponent";
import TextInputComponent from "../../components/textInputComponent/TextInputComponent";
import Button from "../../components/buton/Button";
import {checkIsLetter, checkIsTckn} from "../../genel/validations/Validations";

const YeniHastaSayfasi = () => {
    const history = useHistory();
    return (
    <ViewComponent>
        <TextInputComponent label={"İsim"} onChange={checkIsLetter}/>
        <TextInputComponent label={"Soyisim"} onChange={checkIsLetter}/>
        <TextInputComponent label={"Tc Kimlik No"} onChange={checkIsTckn}/>
        <Button name="Geri Git" style={{backgroundColor:"#EED2B1", color:"#C08D50", marginTop:"10%", marginLeft:"17.5%", float: "left"}}  onClickFunction={() => history.push("/")}/>
        <Button name="Onayla" style={{backgroundColor:"#3F72AF", color:"#112D4E", marginTop:"10%", marginLeft:"5%", float: "left"}} onClickFunction={() => history.push("/semptom")}/>
    </ViewComponent>
    );
}

export default YeniHastaSayfasi;
