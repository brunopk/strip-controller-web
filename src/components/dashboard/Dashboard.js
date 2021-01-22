import React, { useState } from 'react';
import 'rc-color-picker/assets/index.css';
import './Dashboard.css';
import * as Icon from 'react-feather';
import Logo from '../logo';
import MainMenu from './MainMenu';
import DesktopButtonMenu from './DesktopButtonMenu';
import MobileButtonMenu from './MobileButtonMenu';
import { setBodyClass, setRootClass } from '../../utils/css';
import { ButtonMenuContextProvider, ApiContextProvider } from '../../context';

function Dashboard({ CurrentPanel, isLandscape, isPortrait }) {
  const [isFetching, setIsFetching] = useState(false);
  const [buttonMenu, setButtonMenu] = useState({
    interchangeable: typeof CurrentPanel.Buttons !== 'undefined' ? CurrentPanel.Buttons : [],
    fixed: [{
      Icon: Icon.RefreshCw,
    }, {
      Icon: Icon.Power,
    }],
  });
  const setButtonList = (current) => (list) => {
    setButtonMenu({
      fixed: current.fixed,
      interchangeable: list,
    });
  };

  setRootClass('root-dashboard');
  setBodyClass('body-dashboard');

  return (
    <ApiContextProvider isFetching={isFetching} setIsFetching={setIsFetching}>
      <ButtonMenuContextProvider
        buttonList={buttonMenu.interchangeable.concat(buttonMenu.fixed)}
        setButtonList={setButtonList(buttonMenu)}>
        <div className="dashboard">
          <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-primary flex-md-nowrap p-0 shadow">
            <div className="col-md-3 col-lg-2 mr-0 px-3 pt-2 pb-2">
              <Logo />
            </div>
            <button
              className="navbar-toggler position-absolute d-md-none collapsed hidden-md-up"
              type="button"
              data-toggle="collapse"
              data-target="#main-menu-sm"
              aria-controls="main-menu-sm"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <input className="form-control form-control-dark w-100 bg-primary" type="text" readOnly />
            {/* controlled with */}
            <DesktopButtonMenu />
            <MainMenu id="main-menu-sm" currentPanel={CurrentPanel} />
          </nav>
          <div className="container-fluid">
            <div className="row">
              <MainMenu id="main-menu-lg" currentPanel={CurrentPanel} />
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 h-100">
                {/* TODO color list should come from server TODO implement onChose */}
                <CurrentPanel values={[]} editable onChose={(hex) => console.log(hex)} />
              </main>
            </div>
          </div>
          {isPortrait ? <MobileButtonMenu isLandscape={isLandscape} /> : <></>}
        </div>
      </ButtonMenuContextProvider>
    </ApiContextProvider>
  );
}

export default Dashboard;
