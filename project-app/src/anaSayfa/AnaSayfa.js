import React from "react";
import "./AnaSayfa.css";
import { Link } from "react-router-dom";


const AnaSayfa = () => {
    return (
        <div className="AnaSayfa">
            <div className="Info">
                <div className="InfoText">
                    Fizyoterapi Öneri Programı
                </div>
                
            </div>
            <div className="GirisButonlari">
                <div className="GirisButonu">
                    <Link to="/" className="LinkButonu">Fizyoterapist Giriş</Link>
                </div>
                <div className="GirisButonu">
                    <Link to="/giris" className="LinkButonu">Hasta Giriş</Link>
                </div>
            </div>
            
        </div>
    );
}

export default AnaSayfa;