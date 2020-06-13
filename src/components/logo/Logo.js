import React from "react";

function Logo({className}) {
    console.log(className);

    return (
        <div className={className}>
            <strong><span className="text-danger"> Strip </span></strong>
            <strong><span className="text-success"> Controller </span></strong>
            <strong><span className="text-primary"> Web </span></strong>
        </div>

    );
}

export default Logo;
