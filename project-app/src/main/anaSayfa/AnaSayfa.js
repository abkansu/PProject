import React from "react";
import "./AnaSayfa.css";
import { Link } from "react-router-dom";
import { TbPhysotherapist } from "react-icons/tb";
import { MdOutlineSick } from "react-icons/md";
 

const AnaSayfa = () => {
    return (
        <div className="AnaSayfa">
            <div className="Info">
                <div className="InfoText">
                    Fizyoterapi Öneri Programı
                </div>
            </div>
            <div className="GirisButonlari">
                <div className="GirisButonuFizyoterapist">
                    <TbPhysotherapist className="Fizyoterapist"/>
                    <Link to="/" className="LinkButonu">Fizyoterapist Giriş</Link>
                </div>
                <div className="GirisButonuHasta">
                    <MdOutlineSick className="Hasta"/>
                    <Link to="/giris" className="LinkButonu">Hasta Giriş</Link>
                </div>
            </div>
            
        </div>
    );
}

export default AnaSayfa;