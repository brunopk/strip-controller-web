import React, { useContext } from 'react';
import '../../css/colors.css';
import * as Icon from 'react-feather';
import { ButtonMenuContext, MainContext, DashboardContext } from '../../context';

function DesktopButtonMenu() {
  const { contextualButtonMenu } = useContext(ButtonMenuContext);
  const { fetching, data } = useContext(DashboardContext);
  const { deviceError, deviceOn, setDeviceOn, setData } = useContext(MainContext);
  // eslint-disable-next-line no-shadow
  const toggleDeviceButton = (deviceOn) => {
    // Prevent dashboard losing state "backuping" context
    setData({ current: data });
    setDeviceOn(!deviceOn);
    console.log('Call API');
  };

  return (
    <ul className="navbar-nav button-menu-lg flex-row">
      {// eslint-disable-next-line no-shadow
        contextualButtonMenu.map(({ Icon, onClick, title }, index) => (
          <li className="nav-item text-nowrap" key={index}>
            <div className="nav-link">
              <button
                className="btn"
                title={typeof title !== 'undefined' ? title : ''}
                onClick={typeof onClick !== 'undefined' ? () => onClick() : null}>
                <Icon size={18} className="white" />
              </button>
            </div>
          </li>
        ))
      }
      <li className="nav-item text-nowrap">
        <div className="nav-link">
          <button
            className="btn"
            title={deviceError ? 'Go to devices configuration' : ''}
            onClick={() => console.log('Call API or go to device manager if deviceError === true')}>
            {deviceError ? (
              <Icon.AlertTriangle size={18} className="red-with-animation" />
            ) : (
              <Icon.Radio size={18} className={fetching ? 'yellow' : 'white'} />
            )}
          </button>
        </div>
      </li>
      <li className="nav-item text-nowrap">
        <div className="nav-link">
          <button
            className="btn"
            title={deviceOn ? 'Turn off ligths' : 'Turn on ligths'}
            onClick={() => toggleDeviceButton(deviceOn)}>
            <Icon.Power size={18} className={deviceOn ? 'white' : 'red-with-animation'} />
          </button>
        </div>
      </li>
    </ul>
  );
}

export default DesktopButtonMenu;
