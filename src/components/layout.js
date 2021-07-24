import * as React from "react";

import Header from "./header.js";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle && pageTitle + " - "}Sopars de duro</title>
      <Header />
      {children}
    </>
  )
}

export default Layout;