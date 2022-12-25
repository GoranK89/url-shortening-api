import { useState } from 'react';

import Logo from './images/logo.svg';
import MobileMenu from './images/bars-solid.svg';

const Navbar = ({ hamburgerClicked }) => {
  const [isClicked, setIsClicked] = useState(false);

  const openMobileMenu = () => {
    setIsClicked(true);
  };
  const closeMobileMenu = () => {
    setIsClicked(false);
  };

  hamburgerClicked(isClicked);

  return (
    <header className="navbar">
      <img src={Logo} alt="Shortly logo" className="logo" />
      <ul className="nav-links-wrapper">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>
      <div className="cta-links-wrapper">
        <a href="#">Login</a>
        <button className="btn btn-cta">Sign up</button>
      </div>
      <img
        className="navbar-burger"
        src={MobileMenu}
        onClick={!isClicked ? openMobileMenu : closeMobileMenu}
      />
    </header>
  );
};

export default Navbar;
