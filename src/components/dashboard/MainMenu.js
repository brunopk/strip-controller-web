import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import PColors from '../panels/colors/PColors';
import PCustomization from '../panels/customization/PCustomization';
import PEffects from '../panels/effects/PEffects';

function MainMenu({ id, currentPanel }) {
  return (
    <nav id={id} className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3 pb-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className={`nav-link ${currentPanel === PColors ? 'active' : ''}`} to="/dash">
              <Icon.Grid className="feather" />
              Colors
              <span className="sr-only" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${currentPanel === PEffects ? 'active' : ''}`} to="/effects">
              <Icon.Star className="feather" />
              Effects
              <span className="sr-only" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${currentPanel === PCustomization ? 'active' : ''}`} to="/customizable">
              <Icon.Sliders className="feather" />
              Customization
              <span className="sr-only" />
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/logout">
              <Icon.LogOut className="feather" />
              Exit
              <span className="sr-only" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainMenu;
