import React from "react";
import "./BoyKiloInputComponent.css";


const BoyKiloInputComponent = () => {
    const boyString = "Boy (cm)";
    const kiloString = "Kilo (kg)";
    const BMIString = "Vücut Kitle İndeksi";

    const calcBMI = (boy, kilo) => {
        return (kilo / ((boy / 100) ** 2)).toFixed(2);
    }

    const onChangeBoy = (event) => {
        const BMI = document.getElementById("BMI");
        if (event.target.value > 240){
            event.target.value = 240
        }else if (event.target.value < 1){
            event.target.value = null;
            BMI.value = null;
        }else{
            const kilo = document.getElementById("Kilo");
            BMI.value = kilo?.value ? calcBMI(event.target.value, kilo.value) : null
        }
    }

    const onChangeKilo = (event) => {
        const BMI = document.getElementById("BMI");
        if (event.target.value > 500){
            event.target.value = 500
        }else if (event.target.value < 1){
            event.target.value = null
            BMI.value = null;
        }else{
            const boy = document.getElementById("Boy");
            BMI.value = boy?.value ? calcBMI(boy.value, event.target.value) : null
        }
    }

    return (
    <div>
        <div className="InputLabelRange">
            <label>{boyString}</label>
            <label style={{marginLeft: "23%"}}>{kiloString}</label>
            <label style={{marginLeft: "24%"}}>{BMIString}</label>
        </div>
        <div className="InputRange">
            <input type={"number"} className="RangeValue" style={{marginLeft: "0%"}} id={"Boy"} onChange={onChangeBoy}/>
            <input type={"number"} className="RangeValue" id={"Kilo"} onChange={onChangeKilo}/>
            <input type={"number"} className="RangeValue" id={"BMI"} disabled={true}/>
        </div>
    </div>
    );
}

export default BoyKiloInputComponent;
