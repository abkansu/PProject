import React from "react";
import "./EnumInputComponent.css"
import Select from 'react-select'

const EnumInputComponent = (props) => {
    const { label, options } = props;
    const styles = {
        control: (css) => ({ ...css, borderWidth: '2px', borderRadius: '10px', borderColor: "black", borderType: "solid" }),
        input: (css) => ({...css, color: "#3F72AF"})
      };

    return (
        <div>
            <div className="InputLabelEnum">
                <label>{label}</label>
            </div>
            <div className="InputEnum">
                <Select className="EnumValue" styles={styles} options={options}/>
            </div>
        </div>
    );
}

export default EnumInputComponent;