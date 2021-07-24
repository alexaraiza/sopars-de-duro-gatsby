import * as React from "react";
import { Link } from "gatsby";

import * as brandingStyles from "./branding.module.css";

const Branding = () => {
  return (
    <div className={brandingStyles.branding}>
      <Link to="/" className={brandingStyles.title}>sopars de duro</Link>
      <div className={brandingStyles.description}>Menús sibarítics per a totes les butxaques</div>
    </div>
  );
}

export default Branding;