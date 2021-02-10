import React, { useContext } from 'react';
import '../../css/colors.css';
import * as Icon from 'react-feather';
import { ButtonMenuContext, ApiContext, DeviceContext } from '../../context';

function DesktopButtonMenu() {
  const { contextualButtonMenu } = useContext(ButtonMenuContext);
  const { isFetching } = useContext(ApiContext);
  const { isError, isOn, setIsOn } = useContext(DeviceContext);
  const apiFetching = isFetching;
  const deviceError = isError;
  const deviceIsOn = isOn;
  // eslint-disable-next-line no-shadow
  const toggleOn = (deviceIsOn) => {
    console.log('Call API');
    setIsOn(!deviceIsOn);
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
              <Icon.Radio size={18} className={apiFetching ? 'yellow' : 'white'} />
            )}
          </button>
        </div>
      </li>
      <li className="nav-item text-nowrap">
        <div className="nav-link">
          <button
            className="btn"
            title={deviceIsOn ? 'Turn off ligths' : 'Turn on ligths'}
            onClick={() => toggleOn(deviceIsOn)}>
            <Icon.Power size={18} className={deviceIsOn ? 'white' : 'red-with-animation'} />
          </button>
        </div>
      </li>
    </ul>
  );
}

export default DesktopButtonMenu;
