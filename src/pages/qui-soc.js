import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import * as quiSocStyles from "./qui-soc.module.css";

const QuiSoc = () => {
  return (
    <Layout pageTitle="Qui soc">
      <main>
        <article>
          <h1>Qui soc</h1>
          <StaticImage src="../images/dona-cuinant.jpg" alt="Dona cuinant" loading="eager" className={quiSocStyles.img} objectFit="contain" placeholder="none" />
          <p>Em dic Rosa. M’agrada llegir sobre cuina i m’agrada cuinar. Ho faig sempre amb davantal, amb cassoles de ferro colat o de fang, culleres de fusta i paelles de les d’abans. No tinc Thermomix, Kitchenaid ni microones. No tinc intenció de comprar aparells, ni espai a la cuina per posar-los. Damunt del marbre hi ha l’indispensable: una <strong>cafetera</strong> i un <strong>equip de música</strong>. Generalment, mentre cuino, també hi ha <strong>una copa de vi</strong>.</p>
          <p>Als <strong><em>Sopars de duro</em></strong>, les receptes estan pensades en menús: un primer, un segon i unes postres (que, en alguns casos, seran més ben rebudes com a berenar) tenint en compte una premissa: han de costar com a màxim <strong>tres euros per ració</strong>. Malgrat el preu, els menús són equilibrats i deliciosos. Mai no renuncio a la qualitat dels ingredients ni a la joia d’un plat cuinat amb amor i paciència.</p>
        </article>
      </main>
    </Layout>
  );
}

export default QuiSoc;