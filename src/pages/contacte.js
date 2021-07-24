import * as React from "react";

import Layout from "../components/Layout";

const Contacte = () => {
  function submitContactForm(event) {
    event.preventDefault();
    let formData = new FormData(event.target);

    fetch("https://sopars-de-duro-default-rtdb.europe-west1.firebasedatabase.app/contacte.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData.entries()))
    });
  }

  return (
    <Layout pageTitle="Contacte">
      <main>
        <article>
          <h1>Contacte</h1>
          <h4>Fas uns plats deliciosos i vols compartir-los amb mi?</h4>
          <h4>Has provat alguna recepta dels sopars de duro i no ha quedat prou bé?</h4>
          <h4>Tens cap dubte?</h4>
          <form onSubmit={submitContactForm}>
            <div>
              <label htmlFor="name">Nom i cognom</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Correu electrònic</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div>
              <label htmlFor="website">Lloc web <span>(opcional)</span></label>
              <input type="url" name="website" id="website" />
            </div>
            <div>
              <label htmlFor="comment">Comentari</label>
              <textarea name="comment" id="comment" required />
            </div>
            <button type="submit" className="button">Tramet</button>
          </form>
        </article>
      </main>
    </Layout>
  );
}

export default Contacte;