import React from "react";
import "./Hasta.css"
import { FaArrowRight } from "react-icons/fa";

const Hasta = (props) => {
    const { hasta } = props
    const { boy, kilo, dogum_tarihi, gender, isim, soyisim, tckn, telefon } = hasta
    return (
    <div className="Hasta">
        <div className="Ozellik">
            <div className="OzellikIsmi">İsim Soyisim: </div>
            <div>{isim + " " + soyisim}</div>
        </div>
        <div className="Ozellik">
            <div className="OzellikIsmi">TC Kimlik No: </div>
            <div>{tckn}</div>
        </div>
        <div className="Ozellik">
            <div className="OzellikIsmi">Telefon: </div>
            <div>{telefon}</div>
        </div>
        <div className="IleriButonu">
            <FaArrowRight style={{fontSize: "26px"}}/>
        </div>
        <div className="Ozellik">
            <div className="OzellikIsmi">Cinsiyet: </div>
            <div>{gender == "Female" ? "Kadın" : "Erkek"}</div>
        </div>
        <div className="Ozellik">
            <div className="OzellikIsmi">Doğum Tarihi: </div>
            <div>{dogum_tarihi}</div>
        </div>
        <div className="Ozellik">
            <div className="OzellikIsmi">Boy: </div>
            <div>{boy}</div>
        </div>
        <div className="Ozellik">
            <div className="OzellikIsmi">Kilo: </div>
            <div>{kilo}</div>
        </div>
        <div className="Ozellik">
            <div className="OzellikIsmi">BMI: </div>
            <div>{(kilo / ((boy / 100) ** 2)).toFixed(2)}</div>
        </div>
        {/**
         * TODO: Buton sağa yaslanacak ve dikey olacak
         * 
         *  <div className="Ozellik">
                <Button name="Detayları incele" style={{backgroundColor:"#3F72AF", color:"#112D4E", marginTop:"0%", marginLeft:"0%", width: "80%", height: "100%", float: "left"}} onClickFunction={(event) => console.log(event)}/>
            </div>
         */}
        
        
    </div>
    );
}

export default Hasta;
