import '../styles/components/header.scss';
import React, { useState } from 'react';
import logo from '../assets/logo.svg';

function Header() {
  let [mobileMenu, setMobileMenu] = useState(false);

  let menuButton;
  if (mobileMenu) {
    menuButton = (
      <button
        className="mobile-menu-icon"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        open
      </button>
    );
  } else {
    menuButton = (
      <button
        className="mobile-menu-icon"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        close
      </button>
    );
  }

  return (
    <div className="header-container">
      <div className="header">
        <img className="logo" src={logo} alt={logo} />
        {/* <object data="bubo-app/src/assets/icons/logo - square.svg" width="50" height="50"> </object> */}
        <div className="links">
          <span>
            <a href="#faq">FAQ</a>
            <span className="underline"></span>
          </span>
          <span>
            <a href="#news">News</a>
            <span className="underline"></span>
          </span>
          <span>
            <a href="#news">Blog</a>
            <span className="underline"></span>
          </span>
          <span>
            <a href="#contact">Contact</a>
            <span className="underline"></span>
          </span>
        </div>
        <div className="right-half">
          <div className="account">
            <button className="signin">Log in</button>
            <button className="login button-primary">Sign up</button>
          </div>
        </div>
        {menuButton}
      </div>
      {mobileMenu && (
        <div
          className="background"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></div>
      )}
      {mobileMenu && (
        <div className="mobile-menu">
          <div className="content">
            <div className="links">
              <span>
                <a href="#services">Služby</a>
              </span>
              <span>
                <a href="#video">Jak to funguje</a>
              </span>
              <span>
                <a href="#faq">FAQ</a>
              </span>
              <span>
                <a href="#news">Novinky</a>
              </span>
              <span>
                <a href="#contact">Kontakt</a>
              </span>
            </div>
            <hr />
            <div className="account">
              <button className="signin">Přihlásit</button>
              <button className="login button-primary">Vytvořit účet</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
