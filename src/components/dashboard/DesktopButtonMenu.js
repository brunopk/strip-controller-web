import React, { useContext } from 'react';
import Loader from '../loader';
import { ButtonMenuContext, ApiContext } from '../../context';

function DesktopButtonMenu() {
  const { contextualButtonMenu } = useContext(ButtonMenuContext);
  const { isFetching } = useContext(ApiContext);

  return (
    <ul className="navbar-nav button-menu-lg flex-row">
      { contextualButtonMenu.map(({ Icon, onClick, title }, index) => (
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
      ))}
      {isFetching ? (
        <li className="nav-item text-nowrap">
          <div className="nav-link">
            <button className="btn btn-loader">
              <Loader />
            </button>
          </div>
        </li>
      ) : (<></>)}
    </ul>
  );
}

export default DesktopButtonMenu;
