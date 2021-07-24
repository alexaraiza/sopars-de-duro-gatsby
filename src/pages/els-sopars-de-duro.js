import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

const ElsSoparsDeDuro = () => {
  return (
    <Layout pageTitle="Els sopars de duro">
      <main>
        <article>
          <h1>Els sopars de duro</h1>
          <p>Els sopars de duro, en el seu sentit literal (és a dir, sopars que costaven un duro) es van inventar a <a href="http://hemeroteca.lavanguardia.com/preview/1988/07/17/pagina-29/33041821/pdf.html">Can Culleretes</a>, una casa de menjars que va obrir portes l’any 1786 a Barcelona i que es va fer famosa per oferir uns sopars de qualitat, cuinats amb bons productes i a un preu difícil de creure: un duro (=5 pessetes, menys de 3 cèntims d’euro). No cal dir que aquests sopars ja fa temps que es van deixar de servir.</p>
          <p>Precisament perquè resultaven gairebé inversemblants, els sopars de Can Culleretes van originar l’expressió figurada <i>sopars de duro</i>, que <a href="https://rodamots.cat/sopar-de-duro/">Rodamots</a> defineix com a <em>fets de poca volada presentats com a magnífics</em>; com a <em>fanfarronades</em>.</p>
          <p>Aquest blog no vol entabanar ningú amb <i>sopars de duro</i> (figurats), sinó recuperar el sentit literal i l’esperit primigeni de Can Culleretes, tot proposant uns menús exquisits a un preu molt baix. Això sí, el cost s’ha actualitzat fins a 3 euros (més de 100 duros!) per cap. Coses de la inflació…</p>
        </article>
        <div style={{ "alignItems": "center" }}>
          <StaticImage src="../images/can-culleretes.jpg" alt="Can Culleretes" loading="eager" objectFit="contain" placeholder="none" />
          <figcaption className="figcaption--margin" style={{ "marginTop": "0.5em", "maxWidth": "560px" }}>Segons el Llibre Guinness dels rècords, Can Culleretes és el restaurant més antic de Catalunya.</figcaption>
        </div>
      </main>
    </Layout>
  );
}

export default ElsSoparsDeDuro;