import React from "react";
import "./YeniHastaSayfasi.css";
import { useHistory } from "react-router-dom";
import ViewComponent from "../../components/viewComponent/ViewComponent";
import TextInputComponent from "../../components/textInputComponent/TextInputComponent";
import Button from "../../components/buton/Button";
import {checkIsLetter, checkIsTckn} from "../../genel/validations/Validations";
import BoyKiloInputComponent from "../../components/boyKiloInputComponent/BoyKiloInputComponent";
import TarihInputComponent from "../../components/tarihInputComponent/TarihInputComponent";
import EnumInputComponent from "../../components/enumInputComponent/EnumInputComponent";

const YeniHastaSayfasi = () => {
    const history = useHistory();
    const options = [
        {value: "Erkek", label: "Erkek"},
        {value: "Kadın", label: "Kadın"}
    ]
    return (
    <ViewComponent style={{height: "100%"}}>
        <TextInputComponent label={"İsim"} onChange={checkIsLetter}/>
        <TextInputComponent label={"Soyisim"} onChange={checkIsLetter}/>
        <TextInputComponent label={"Tc Kimlik No"} onChange={checkIsTckn}/>
        <BoyKiloInputComponent label={"Boy"}/>
        <TarihInputComponent label={"Doğum Tarihi"}/>
        <EnumInputComponent label={"Cinsiyet"} options={options}/>
        <Button name="Geri Git" style={{backgroundColor:"#EED2B1", color:"#C08D50", marginTop:"10%", marginLeft:"17.5%", float: "left"}}  onClickFunction={() => history.push("/")}/>
        <Button name="Onayla" style={{backgroundColor:"#3F72AF", color:"#112D4E", marginTop:"10%", marginLeft:"5%", float: "left"}} onClickFunction={() => history.push("/semptom")}/>
    </ViewComponent>
    );
}

export default YeniHastaSayfasi;
