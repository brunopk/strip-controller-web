import React from "react";
import * as Icon from 'react-feather';
import {Panel as PColors} from "../panels/colors"
import {Panel as PEffects} from "../panels/effects"
import {Panel as PCustomizable} from "../panels/customizable"


function MainMenu({id, currentPanel}) {

    return (
        <nav id={id} className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3 pb-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className={"nav-link " + (currentPanel === PColors ? "active" : "")} href="/dash">
                            <Icon.Grid className="feather"/>Colors <span className="sr-only"></span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link " + (currentPanel === PEffects ? "active" : "")} href="/eff">
                            <Icon.Star className="feather"/>Effects <span className="sr-only"></span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link " + (currentPanel === PCustomizable ? "active" : "")} href="/customizable">
                            <Icon.Sliders className="feather"/>Customizable <span className="sr-only"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MainMenu;
