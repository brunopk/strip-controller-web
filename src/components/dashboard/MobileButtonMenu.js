import React, { useContext } from 'react';
import { ButtonMenuContext } from '../../context/ButtonMenuContext';

function MobileButtonMenu({ isLandscape }) {
  const { buttonList } = useContext(ButtonMenuContext);
  const className = isLandscape ? 'landscape-button-menu' : 'portrait-button-menu';
  const flex = isLandscape ? 'flex-column' : 'flex-row';

  return (
    <div className={className}>
      <ul className={`nav ${flex} bg-primary`}>
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
    </div>
  );
}

export default MobileButtonMenu;
