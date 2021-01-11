import React from "react";
import "rc-color-picker/assets/index.css";
import "./Dashboard.css";
import Logo from "../../components/logo";
import MainMenu from "./MainMenu"
import ButtonMenuLg from "./ButtonMenuLg"
import ButtonMenuSm from "./ButtonMenuSm"
import {setBodyClass, setRootClass} from "../../utils/css"


function Dashboard({CurrentPanel}) {

    setRootClass("root-dashboard");
    setBodyClass("body-dashboard");

    return (
        <div className="dashboard">
            <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-primary flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3 pt-2 pb-2" href="/strip-controller"><Logo/></a>
                <button className="navbar-toggler position-absolute d-md-none collapsed hidden-md-up" type="button"
                        data-toggle="collapse" data-target="#main-menu-sm" aria-controls="main-menu-sm" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <input className="form-control form-control-dark w-100 bg-primary" type="text" readOnly={true}/>
                <ButtonMenuLg />
                <MainMenu id="main-menu-sm" currentPanel={CurrentPanel} />
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <MainMenu id="main-menu-lg" currentPanel={CurrentPanel} />
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 h-100">
                    {/* 
                      TODO color list should come from server 
                      TODO implement onChose
                    */}
                    <CurrentPanel values={[]}  editable={true} onChose={(hex) => {alert(hex)}}/>
                    </main>
                </div>
            </div>
            <ButtonMenuSm />
        </div>
    );
}

export default Dashboard;
