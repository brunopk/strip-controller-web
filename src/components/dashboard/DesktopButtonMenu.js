import React, { useContext } from 'react';
import { ButtonMenuContext } from '../../context/ButtonMenuContext';

function DesktopButtonMenu() {
  const { buttonList } = useContext(ButtonMenuContext);

  return (
    <ul className="navbar-nav button-menu-lg flex-row">
      { buttonList.map(({ Icon, onClick, title }, index) => (
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
    </ul>
  );
}

export default DesktopButtonMenu;
