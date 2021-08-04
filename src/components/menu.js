import * as React from "react";

import Navigation from "./navigation";
import Tags from "./tags";
import * as menuStyles from "./menu.module.css";

let menuRef;

export function toggleMenu() {
  menuRef.current.classList.toggle(menuStyles.active);
}

const Menu = () => {
  menuRef = React.useRef();

  return (
    <div className={menuStyles.menu} ref={menuRef}>
      <button className={menuStyles.closeBtn} onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
      </button>
      <Navigation />
      <Tags />
    </div>
  );
}

export default Menu;