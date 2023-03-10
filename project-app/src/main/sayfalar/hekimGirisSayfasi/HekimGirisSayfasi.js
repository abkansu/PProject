import React from "react";
import { useHistory } from "react-router-dom";
import "./HekimGirisSayfasi.css";
import ViewComponent from "../../components/viewComponent/ViewComponent";
import TextInputComponent from "../../components/textInputComponent/TextInputComponent";
import Button from "../../components/buton/Button";
import { checkIsTckn } from "../../genel/validations/Validations";

const HekimGirisSayfasi = () => {
    const history = useHistory();

    return (
        <ViewComponent style={{paddingTop: "12%"}}>
            <TextInputComponent label={"Tc Kimlik No"} onChange={checkIsTckn}/>
            <TextInputComponent label={"Şifre"} type={"password"}/>
            <Button name="Geri Git" style={{backgroundColor:"#EED2B1", color:"#C08D50", marginTop:"10%", marginLeft:"17.5%", float: "left"}}  onClickFunction={() => history.push("/")}/>
            <Button name="Onayla" style={{backgroundColor:"#3F72AF", color:"#112D4E", marginTop:"10%", marginLeft:"5%", float: "left"}} onClickFunction={() => history.push("/semptom")}/>
        </ViewComponent>
    );
}

export default HekimGirisSayfasi;

