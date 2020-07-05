import React from "react";
import "rc-color-picker/assets/index.css";
import "./Dashboard.css";
import * as Icon from 'react-feather';
import Logo from "../../components/logo";
import {setBodyClass, setRootClass} from "../../utils/css"
import {Panel as PColors} from "../panels/colors"
import {Panel as PEffects} from "../panels/effects"
import {Panel as PCustomizable} from "../panels/customizable"


function Dashboard({CurrentPanel}) {

    setRootClass("root-dashboard");
    setBodyClass("body-dashboard");

    return (
        <div className="dashboard">
            <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-primary flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/strip-controller"><Logo/></a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button"
                        data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <input className="form-control form-control-dark w-100 bg-primary" type="text" readOnly={true}/>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="/logut">
                                <button className="btn btn-success">< Icon.PauseCircle /></button>
                            </a>
                        </li>
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="/logut">
                                <button className="btn btn-danger">< Icon.Power /></button>
                            </a>
                        </li>
                    </ul>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="sidebar-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className={"nav-link " + (CurrentPanel === PColors ? "active" : "")} href="/dash">
                                        <Icon.Grid className="feather"/>Colors <span className="sr-only"></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={"nav-link " + (CurrentPanel === PEffects ? "active" : "")} href="/eff">
                                        <Icon.Star className="feather"/>Effects <span className="sr-only"></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={"nav-link " + (CurrentPanel === PCustomizable ? "active" : "")} href="/customizable">
                                        <Icon.Sliders className="feather"/>Customizable <span className="sr-only"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 h-100">
                    {/* 
                      TODO color list should come from server 
                      TODO implement onChose
                    */}
                    <CurrentPanel values={[]}  editable={true} onChose={(hex) => {alert(hex)}}/>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
