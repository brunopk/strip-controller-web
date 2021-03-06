import React, { useContext, useState, useEffect } from 'react';
import 'rc-color-picker/assets/index.css';
import './Dashboard.css';
import * as Icon from 'react-feather';
import MainMenu from './MainMenu';
import DesktopButtonMenu from './DesktopButtonMenu';
import MobileButtonMenu from './MobileButtonMenu';
import getColor from '../../api/resources/color';
import { cmdScrpiStatus } from '../../api/commands/scrpi';
import { useHistory } from 'react-router-dom';
import { useScheduledFetch } from '../../hooks';
import { setBodyClass, setRootClass } from '../../utils/css';
import { ButtonMenuContextProvider, DashboardContextProvider, MainContext } from '../../context';

function Dashboard({ children, isLandscape, isPortrait }) {
  const history = useHistory();
  const result1 = useScheduledFetch(getColor, 10);
  const result2 = useScheduledFetch(cmdScrpiStatus, 5);
  const mainContext = useContext(MainContext);
  const [contextualButtonMenu, setContextualButtonMenu] = useState([]);
  const [data, setData] = useState(typeof mainContext.data.current !== 'undefined' ? mainContext.data.current : null);
  const [colors, setColors] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [fetching, setFetching] = useState(false);

  setRootClass('root-dashboard');
  setBodyClass('body-dashboard');

  // Periodically update color list
  useEffect(() => {
    if (!modalVisible) {
      if (!result1.error && result1.data != null) {
        setColors(result1.data);
      }
    }
  }, [result1.error, result1.data, modalVisible]);

  // Periodically check device status
  useEffect(() => {
    if (!modalVisible) {
      if (!result1.error && result1.data != null) {
        // Prevent dashboard losing state
        mainContext.setData({
          ...mainContext.data,
          current: data,
        });
        // Update device status icon
        if (result2.data.is_error) {
          mainContext.setDeviceError(result2.data.last_exception);
        } else {
          mainContext.setDeviceError(false);
        }
      }
    }
  }, [result2.error, result2.data, modalVisible]);

  return (
    <DashboardContextProvider
      data={data}
      colors={colors}
      fetching={fetching}
      modalVisible={modalVisible}
      setData={setData}
      setColors={setColors}
      setFetching={setFetching}
      setModalVisible={setModalVisible}>
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
