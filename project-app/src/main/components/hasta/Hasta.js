import React from "react";
import "./Hasta.css"

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
    </div>
    );
}

export default Hasta;
