import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

const PaginaNoTrobada = () => {
  return (
    <Layout pageTitle="Pàgina no trobada">
      <main>
        <article>
          <h1>Pàgina no trobada</h1>
          <p>Aquesta pàgina no s’ha trobat.</p>
          <Link to="/">Torna a l’inici</Link>
        </article>
      </main>
    </Layout>
  )
}

export default PaginaNoTrobada;