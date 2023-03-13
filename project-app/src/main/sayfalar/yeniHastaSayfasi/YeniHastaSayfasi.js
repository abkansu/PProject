import React, { useState } from "react";
import "./YeniHastaSayfasi.css";
import { useHistory } from "react-router-dom";
import ViewComponent from "../../components/viewComponent/ViewComponent";
import TextInputComponent from "../../components/textInputComponent/TextInputComponent";
import Button from "../../components/buton/Button";
import {checkIsLetter, checkIsTckn, formatPhoneNumber} from "../../genel/validations/Validations";
import BoyKiloInputComponent from "../../components/boyKiloInputComponent/BoyKiloInputComponent";
import TarihInputComponent from "../../components/tarihInputComponent/TarihInputComponent";
import EnumInputComponent from "../../components/enumInputComponent/EnumInputComponent";
import TelNoInputComponent from "../../components/telNoInputComponent/TelNoInputComponent";

const YeniHastaSayfasi = () => {
    const history = useHistory();
    const [ sayfaNumarasi, setSayfaNumarasi ] = useState(1);
    const options = [
        {value: "Erkek", label: "Erkek"},
        {value: "Kadın", label: "Kadın"}
    ]
    return (
    <>
        {sayfaNumarasi === 1 ? 
        <ViewComponent>
            <TextInputComponent label={"İsim"} onChange={checkIsLetter}/>
            <TextInputComponent label={"Soyisim"} onChange={checkIsLetter}/>
            <TextInputComponent label={"Tc Kimlik No"} onChange={checkIsTckn}/> 
            <TelNoInputComponent label={"Telefon Numarası"} onChange={formatPhoneNumber}/>
            <Button name="Geri Git" style={{backgroundColor:"#EED2B1", color:"#C08D50", marginTop:"5%", marginLeft:"17.5%", float: "left"}}  onClickFunction={() => history.goBack()}/>
            <Button name="İleri" style={{backgroundColor:"#3F72AF", color:"#112D4E", marginTop:"5%", marginLeft:"5%", float: "left"}} onClickFunction={() => setSayfaNumarasi(2)}/>
        </ViewComponent> : 
        <ViewComponent>
            <BoyKiloInputComponent label={"Boy"}/>
            <TarihInputComponent label={"Doğum Tarihi"} onChange={event => console.log(event.target.value)}/>
            <EnumInputComponent label={"Cinsiyet"} options={options}/>
            <Button name="Geri Git" style={{backgroundColor:"#EED2B1", color:"#C08D50", marginTop:"5%", marginLeft:"17.5%", float: "left"}}  onClickFunction={() => setSayfaNumarasi(1)}/>
            <Button name="Onayla" style={{backgroundColor:"#3F72AF", color:"#112D4E", marginTop:"5%", marginLeft:"5%", float: "left"}} onClickFunction={() => history.push("/semptom")}/>
        </ViewComponent>}
    </>
    );
}

export default YeniHastaSayfasi;
