import React from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import * as Icon from 'react-feather';
import $ from 'jquery';
import PColors from '../panels/colors/PColors';
import PCustomization from '../panels/customization/PCustomization';
import PEffects from '../panels/effects/PEffects';

function MainMenu({ id, currentPanel }) {
  const collapseMenu = () => $('.navbar-toggler').trigger('click');
  return (
    <nav id={id} className={`${isMobile ? 'col-md-12' : ''} d-md-block bg-light sidebar collapse`}>
      <div className={!isMobile ? 'pt-5' : ''}>
        <ul className={`${!isMobile ? 'pt-4' : ''} nav flex-column`}>
          <li className="nav-item">
            <Link
              className={`nav-link ${currentPanel === PColors ? 'active' : ''}`}
              to="/dashboard"
              onClick={() => collapseMenu()}>
              <Icon.Grid className="feather" />
              Colors
              <span className="sr-only" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${currentPanel === PEffects ? 'active' : ''}`}
              to="/effects"
              onClick={() => collapseMenu()}>
              <Icon.Star className="feather" />
              Effects
              <span className="sr-only" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${currentPanel === PCustomization ? 'active' : ''}`}
              to="/customizable"
              onClick={() => collapseMenu()}>
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
