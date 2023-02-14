import React from "react";
import "./Button.css";

const Button = (props) => {
    const { name, style, onClickFunction } = props
    console.log(style)

    const onHoverOver = (e) => {
        e.target.style.backgroundColor = style.color;
        e.target.style.color = style.backgroundColor;
        e.target.style.borderColor = style.backgroundColor;
        e.target.style.scale = 1.1
    }

    const onHoverEnd = (e) => {
        e.target.style.backgroundColor = style.backgroundColor;
        e.target.style.color = style.color;
        e.target.style.borderColor = style.color;
        e.target.style.scale = 1.0
    }


    return (<button className="Buton" 
            style={style} 
            onMouseEnter={onHoverOver}
            onMouseLeave={onHoverEnd}
            onClick={onClickFunction}>{name}</button>
            );

}

export default Button;