import React from "react";
import "./Color.css"

function Color({rgbValue}) {

    return (
        <div className="col-sm-12 col-md-2 col-lg-2">
            <div style={{backgroundColor: `rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})`}}/>
        </div>
    );
}

export default Color;
