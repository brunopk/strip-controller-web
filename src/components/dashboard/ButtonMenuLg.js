import React from "react";
import * as Icon from 'react-feather';

function ButtonMenuLg() {
    return (
        <ul className="navbar-nav button-menu-lg">
            <li className="nav-item text-nowrap">	
                <a className="nav-link" href="/logut">	
                    <button className="btn" title="Reset">
                        <Icon.RefreshCcw size={18} className="btn-white"/>
                    </button>	
                </a>	
            </li>		
            <li className="nav-item text-nowrap">	
                <a className="nav-link" href="/logut">	
                    <button className="btn" title="Turn on/off">
                        <Icon.Power size={18} className="btn-white"/>
                    </button>	
                </a>	
            </li>	
            <li className="nav-item text-nowrap">	
                <a className="nav-link" href="/logut">	
                    <button className="btn" title="Logout">
                        <Icon.LogOut size={18} className="btn-white"/>
                    </button>	
                </a>	
            </li>	
        </ul>
    )
}

export default ButtonMenuLg;