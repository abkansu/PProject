import React from "react";
import { useHistory } from "react-router-dom";
import "./HekimIlkSayfa.css"

const HekimIlkSayfa = () => {
    const history = useHistory();

    return (
    <div className="HekimIlkSayfa">
        <div className="Info">
            <div className="InfoText">
                Fizyoterapi Öneri Programı
            </div>
        </div>
        <div className="Secenekler">
            <div className="Secenek Ilk" onClick={() => history.push("/hastaListele")}>Hasta Listesi</div>
            <div className="Secenek" onClick={() => history.push("/yeniHasta")}>Yeni Hasta</div>
            <div className="Secenek">Egzersiz Listesi</div>
            <div className="Secenek">Ayarlar</div>
            <div className="Secenek Cikis" onClick={() => history.push("/")}>Çıkış</div>
        </div>
    </div>
    );
}

export default HekimIlkSayfa;