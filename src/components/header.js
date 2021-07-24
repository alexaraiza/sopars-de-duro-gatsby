import * as React from "react";

import Branding from "./branding";
import Menu, { toggleMenu } from "./menu";
import * as headerStyles from "./header.module.css";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.navbar}>
        <Branding />
        <button className={headerStyles.hamburger} onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>
        </button>
      </div>
      <Menu />
    </header>
  );
}

export default Header;