import React, { useContext } from 'react';
import { ButtonMenuContext } from '../../context/ButtonMenuContext';

function DesktopButtonMenu() {
  const { buttonList } = useContext(ButtonMenuContext);

  return (
    <ul className="navbar-nav button-menu-lg">
      { buttonList.map(({ Icon }, index) => (
        <li className="nav-item text-nowrap" key={index}>
          <a className="nav-link" href="/logut">
            <button type="button" className="btn" title="Reset">
              <Icon size={18} className="color-white" />
            </button>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default DesktopButtonMenu;
