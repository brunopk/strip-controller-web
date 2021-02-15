import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import * as Icon from 'react-feather';
import $ from 'jquery';
import menu from '../../menu';

// TODO: show modal advicing to save dashboard before leaving
// TODO: check if when navegating to /customization/asd match correctly with /customization
// (to show the correct active link on menu)

function MainMenu({ id }) {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const onClickLink = (path) => {
    $('.navbar-toggler').trigger('click');
    setActive(path);
    // Remove panel data on main context
  };

  return (
    <nav id={id} className={`${isMobile ? 'col-md-12' : ''} d-md-block bg-light sidebar collapse`}>
      <div className={!isMobile ? 'pt-5' : ''}>
        <ul className={`${!isMobile ? 'pt-4' : ''} nav flex-column`}>
          <li className="nav-item">
            <Link
              className={`nav-link ${active === menu.effects.path ? 'active' : ''}`}
              to={menu.effects.path}
              onClick={() => onClickLink(menu.effects.path)}>
              <Icon.Sliders className="feather" />
              {menu.effects.label}
              <span className="sr-only" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${active === menu.customization.path ? 'active' : ''}`}
              to={menu.customization.path}
              onClick={() => onClickLink(menu.customization.path)}>
              <Icon.Sliders className="feather" />
              {menu.customization.label}
              <span className="sr-only" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${active === menu.devices.path ? 'active' : ''}`}
              to={menu.devices.path}
              onClick={() => onClickLink(menu.devices.path)}>
              <Icon.Cpu className="feather" />
              {menu.devices.label}
              <span className="sr-only" />
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link " href={menu.logout.path}>
              <Icon.LogOut className="feather" />
              {menu.logout.label}
              <span className="sr-only" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainMenu;
