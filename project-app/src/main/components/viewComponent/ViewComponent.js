import React from "react";
import "./ViewComponent.css";

const ViewComponent = (props) => {
    const { style, children } = props;
    return (
    <div className="ViewComponent">
        <div className="InputListX" style={style}>
            {children}
        </div>
    </div>
    );
}

export default ViewComponent;