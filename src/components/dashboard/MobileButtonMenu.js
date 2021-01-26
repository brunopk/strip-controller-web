import React, { useContext } from 'react';
import Loader from '../loader';
import { ButtonMenuContext, ApiContext } from '../../context';

function MobileButtonMenu({ isLandscape }) {
  const { contextualButtonMenu } = useContext(ButtonMenuContext);
  const { isFetching } = useContext(ApiContext);
  const className = isLandscape ? 'landscape-button-menu' : 'portrait-button-menu';
  const flex = isLandscape ? 'flex-column' : 'flex-row';

  return (
    <div className={className}>
      <ul className={`nav ${flex} bg-primary`}>
        {isFetching ? (
          <li className="nav-item text-nowrap">
            <div className="nav-link">
              <button className="btn">
                <Loader />
              </button>
            </div>
          </li>
        ) : contextualButtonMenu.map(({ Icon, onClick, title }, index) => (
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
