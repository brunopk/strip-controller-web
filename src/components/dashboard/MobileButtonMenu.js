import React, { useContext } from 'react';
import { ButtonMenuContext } from '../../context/ButtonMenuContext';

function MobileButtonMenu({ isLandscape }) {
  const { buttonList } = useContext(ButtonMenuContext);
  const className = isLandscape ? 'landscape-button-menu' : 'portrait-button-menu';
  const flex = isLandscape ? 'flex-column' : 'flex-row';

  return (
    <div className={className}>
      <ul className={`nav ${flex} bg-primary`}>
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
    </div>
  );
}

export default MobileButtonMenu;
