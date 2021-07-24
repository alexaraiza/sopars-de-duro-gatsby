import * as React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Els meus plats</Link>
      <Link to="/els-sopars-de-duro">Els sopars de duro</Link>
      <Link to="/qui-soc">Qui soc</Link>
      <Link to="/contacte">Contacte</Link>
    </nav>
  );
}

export default Navigation;