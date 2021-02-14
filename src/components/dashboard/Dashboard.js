import React, { useContext, useState } from 'react';
import 'rc-color-picker/assets/index.css';
import './Dashboard.css';
import * as Icon from 'react-feather';
import MainMenu from './MainMenu';
import DesktopButtonMenu from './DesktopButtonMenu';
import MobileButtonMenu from './MobileButtonMenu';
import { useHistory } from 'react-router-dom';
import { setBodyClass, setRootClass } from '../../utils/css';
import { ButtonMenuContextProvider, DashboardContextProvider, MainContext } from '../../context';

function Dashboard({ children, isLandscape, isPortrait }) {
  const history = useHistory();
  const mainContext = useContext(MainContext);
  const [contextualButtonMenu, setContextualButtonMenu] = useState([]);
  const [data, setData] = useState(typeof mainContext.data.current !== 'undefined' ? mainContext.data.current : null);
  const [colors, setColors] = useState(typeof mainContext.data.colors !== 'undefined' ? mainContext.data.colors : []);
  const [fetching, setFetching] = useState(false);

  setRootClass('root-dashboard');
  setBodyClass('body-dashboard');

  // TODO: periodically update color list
  // TODO: periodically check device status

  return (
    <DashboardContextProvider
      data={data}
      colors={colors}
      fetching={fetching}
      setData={setData}
      setColors={setColors}
      setFetching={setFetching}>
      <ButtonMenuContextProvider
        contextualButtonMenu={contextualButtonMenu}
        setContextualButtonMenu={setContextualButtonMenu}>
        <div className="dashboard">
          <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-primary flex-md-nowrap p-0 shadow">
            <div className="col-1 pt-2 pb-2">
              <Icon.ArrowLeft size={18} className="color-white" onClick={() => history.goBack()} />
            </div>
            <button
              className="navbar-toggler position-absolute d-md-none collapsed hidden-md-up"
              type="button"
              data-toggle="collapse"
              data-target="#main-menu-sm"
              aria-controls="main-menu-sm"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <Icon.Menu className="color-white" />
            </button>
            <input className="form-control form-control-dark w-100 bg-primary d-lg-block d-none" type="text" readOnly />
            {/* controlled with */}
            <DesktopButtonMenu />
            <MainMenu id="main-menu-sm" isLandscape={isLandscape} />
          </nav>
          <div className="container-fluid">
            <div className="row">
              <MainMenu id="main-menu-lg" isLandscape={isLandscape} />
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 h-100">
                {children}
              </main>
            </div>
          </div>
          {isPortrait ? <MobileButtonMenu isLandscape={isLandscape} /> : <></>}
        </div>
      </ButtonMenuContextProvider>
    </DashboardContextProvider>
  );
}

export default Dashboard;
