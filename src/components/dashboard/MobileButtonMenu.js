import React, { useContext } from 'react';
import { ButtonMenuContext, MainContext, DashboardContext } from '../../context';
import * as Icon from 'react-feather';

function MobileButtonMenu({ isLandscape }) {
  const { contextualButtonMenu } = useContext(ButtonMenuContext);
  const { fetching, data } = useContext(DashboardContext);
  const { deviceError, deviceOn, setDeviceOn, setData } = useContext(MainContext);
  const className = isLandscape ? 'landscape-button-menu' : 'portrait-button-menu';
  const flex = isLandscape ? 'flex-column' : 'flex-row';
  // eslint-disable-next-line no-shadow
  const toggleDeviceButton = (deviceOn) => {
    // Prevent dashboard losing state "backuping" context
    setData({ current: data });
    setDeviceOn(!deviceOn);
    console.log('Call API');
  };

  return (
    <div className={className}>
      <ul className={`nav ${flex} bg-primary`}>
        {// eslint-disable-next-line no-shadow
        contextualButtonMenu.map(({ Icon, onClick, title }, index) => (
          <li className="nav-item text-nowrap" key={index}>
            <div className="nav-link">
              <button
                className="btn"
                title={typeof title !== 'undefined' ? title : ''}
                onClick={typeof onClick !== 'undefined' ? () => onClick() : null}>
                <Icon size={18} className="color-white" />
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
    </div>
  );
}

export default MobileButtonMenu;
