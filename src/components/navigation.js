import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import * as navigationStyles from "./navigation.module.css";

let activeButton = null;
let activeGroupElement = null;

function getClickedButtonElement(clickedElement) {
  let element = clickedElement;
  while (element.tagName !== "BUTTON") {
    element = element.parentElement;
  }
  return element;
}

export function expand(event) {
  if (activeButton) {
    activeButton.children[1].style.opacity = "";
    activeGroupElement.style.height = "";
  }
  let element = getClickedButtonElement(event.target);
  if (element === activeButton) {
    activeButton = null;
    activeGroupElement = null;
    return;
  }
  activeButton = element;
  activeGroupElement = activeButton.parentElement.nextElementSibling;
  activeButton.children[1].style.opacity = 0;
  activeGroupElement.style.height = activeGroupElement.scrollHeight + "px";
}

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      allCategoriesJson {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `);

  const allCategories = data.allCategoriesJson.edges;

  return (
    <nav className={navigationStyles.nav}>
      <div className={navigationStyles.expandGroup}>
        <div>
          <Link to="/">Els meus plats</Link>
          <button className={navigationStyles.expandBtn} onClick={expand}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ "position": "absolute" }}><path d="M19 13H5v-2h14v2z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={navigationStyles.disappear}><path d="M11 5h2v14h-2z"/></svg>
          </button>
        </div>
        <div className={navigationStyles.linkList}>
          {allCategories.map((category) => <Link to={"/categories/" + category.node.id}>{category.node.name}</Link>)}
        </div>
      </div>
      <Link to="/els-sopars-de-duro">Els sopars de duro</Link>
      <Link to="/qui-soc">Qui soc</Link>
      <Link to="/contacte">Contacte</Link>
    </nav>
  );
}

export default Navigation;