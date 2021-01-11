import React from "react";
import * as Icon from 'react-feather';

function ButtonMenuSm() {
    return (
        <footer class="footer">
            <ul className="nav flex-row button-menu-sm bg-primary">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <Icon.RefreshCcw className="btn-white"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <Icon.Power className="btn-white"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <Icon.LogOut className="btn-white"/>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default ButtonMenuSm;
