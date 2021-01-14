import React, { useContext } from 'react';
import { ButtonMenuContext } from '../../context/ButtonMenuContext';

function ButtonMenuMenuForPortrait() {
  const { buttonList } = useContext(ButtonMenuContext);
  return (
    <footer className="footer">
      <ul className="nav flex-row button-menu-sm bg-primary">
        { buttonList.map(({ Icon }, index) => (
          <li className="nav-item text-nowrap" key={index}>
            <a className="nav-link" href="/logut">
              <button type="button" className="btn" title="Reset">
                <Icon size={18} className="btn-white" />
              </button>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default ButtonMenuMenuForPortrait;
