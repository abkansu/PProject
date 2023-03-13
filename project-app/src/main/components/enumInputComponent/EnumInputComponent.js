import React from "react";
import "./EnumInputComponent.css"
import Select from 'react-select'

const EnumInputComponent = (props) => {
    const { label, options } = props;
    const styles = {
        control: (css) => ({ ...css, borderWidth: '2px', borderRadius: '10px', borderColor: "black", borderType: "solid" }),
        indicatorSeparator: (css) => ({...css, backgroundColor: "black", color: "black"}),
        input: (css) => ({...css, color: "#3F72AF"}),
        singleValue: (css) => ({...css, color: "#3F72AF"})
      };

    return (
        <div>
            <div className="InputLabelEnum">
                <label>{label}</label>
            </div>
            <div className="InputEnum">
                <Select className="EnumValue" placeholder={"Seçiniz..."} styles={styles} options={options}/>
            </div>
        </div>
    );
}

export default EnumInputComponent;