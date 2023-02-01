import React from "react";
import "./Button.css";

const Button = (props) => {
    const { name, backgroundColor, color, marginTop, marginLeft } = props

    const onHoverOver = (e) => {
        e.target.style.backgroundColor = color;
        e.target.style.color = backgroundColor;
        e.target.style.borderColor = backgroundColor;
        e.target.style.scale = 1.1
    }

    const onHoverEnd = (e) => {
        e.target.style.backgroundColor = backgroundColor;
        e.target.style.color = color;
        e.target.style.borderColor = color;
        e.target.style.scale = 1.0
    }


    return (<button className="Buton" 
            style={{backgroundColor: backgroundColor, color: color, borderColor: color, marginTop: marginTop, marginLeft: marginLeft}} 
            onMouseEnter={onHoverOver}
            onMouseLeave={onHoverEnd}>{name}</button>
            );

}

export default Button;