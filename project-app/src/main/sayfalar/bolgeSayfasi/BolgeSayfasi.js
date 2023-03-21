import React, { useEffect, useState } from "react";
import "./BolgeSayfasi.css"
import MOCK_DATA from "../../genel/data/BOLGE_MOCK_DATA.json"

const BolgeSayfasi = () => {
    const [ selectedBolge, setSelectedBolge ] = useState(null)
    const [ bolgeKasIsimleri, setBolgeKasIsimleri ] = useState([])
        
    const onClickBolge = (event) => {
        
        if (selectedBolge === event.target.innerText){
            setSelectedBolge(null)
        }else{
            setSelectedBolge(event.target.innerText)
        }
    }

    useEffect(() => {
        setBolgeKasIsimleri(MOCK_DATA.filter((value, key) => {
            return value.bolge_ismi === selectedBolge;
        })[0]?.kas_isimleri)
    }, [selectedBolge])
        
    
    return (
    <div className="BolgeSayfasi">
        <div className="Bolgeler">
            <label style={{float: "left", width: "100%", direction: "ltr", marginBottom: "1%"}}>Vücut Bölgeleri</label>
            {MOCK_DATA.map((value, key) => {
                return (
                    <>
                        <div key={key} className={selectedBolge == value.bolge_ismi ? "BolgeSelected" : "Bolge"} onClick={onClickBolge} >{value.bolge_ismi}</div>
                    </>
                );
            })}
        </div>
        <div className="Bolgeler">
            <label style={{float: "left", width: "100%", direction: "ltr", marginBottom: "1%"}}>Kas Grupları</label>
            {bolgeKasIsimleri?.map((value, key) => {
                return (
                    <>
                        <div key={key} className={selectedBolge == value.bolge_ismi ? "BolgeSelected" : "Bolge"} onClick={onClickBolge} >{selectedBolge + "-" + value}</div>
                    </>
                );
            })}
        </div>
        <div className="Bolgeler">
            <label style={{float: "left", width: "100%", direction: "ltr", marginBottom: "1%"}}>Seçilenler</label>
        </div>
    </div>);
}

export default BolgeSayfasi;
