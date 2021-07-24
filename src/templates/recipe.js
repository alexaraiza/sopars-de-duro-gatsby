import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import * as recipeStyles from "./recipe.module.css";

export const query = graphql`
  query($id: String!) {
    recipesJson(id: { eq: $id }) {
      title
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
        }
      }
      intro {
        h3
        h4
        ol
        p
      }
      cost
      ingredients {
        h3
        p
        ul
      }
      prep {
        h3
        h4
        ol
        p
      }
      variants {
        h3
        p
        ul
      }
      extras {
        h2
        h3
        p
        ul
      }
    }
  }
`;

const Recipe = ({ data }) => {
  const recipe = data.recipesJson;

  return (
    <Layout pageTitle={recipe.title}>
      <main>
        <div className={recipeStyles.header}>
          <GatsbyImage image={recipe.image.childImageSharp.gatsbyImageData} alt={recipe.title} loading="eager" />
          <h1>{recipe.title}</h1>
        </div>
        <article>
          {recipe.intro.map((element) => getHTML(element))}
          <h3>{recipe.cost}</h3>
          <h2>Ingredients</h2>
          {recipe.ingredients.map((element) => getHTML(element))}
          <h2>Preparació</h2>
          {recipe.prep.map((element) => getHTML(element))}
          {recipe.variants && <h2>Variants</h2>}
          {recipe.variants && recipe.variants.map((element) => getHTML(element))}
          {recipe.extras && recipe.extras.map((element) => getHTML(element))}
        </article>
      </main>
    </Layout>
  );
}

function getHTML(element) {
  for (let tagName of Object.keys(element)) {
    if (!element[tagName]) continue;
    if (tagName === "h2") return <h2 dangerouslySetInnerHTML={{ __html: element[tagName] }}></h2>;
    if (tagName === "h3") return <h3 dangerouslySetInnerHTML={{ __html: element[tagName] }}></h3>;
    if (tagName === "h4") return <h4 dangerouslySetInnerHTML={{ __html: element[tagName] }}></h4>;
    if (tagName === "p") return <p dangerouslySetInnerHTML={{ __html: element[tagName] }}></p>;
    if (tagName === "ol") return <ol>{element[tagName].map((item) => <li dangerouslySetInnerHTML={{ __html: item }}></li>)}</ol>;
    if (tagName === "ul") return <ul>{element[tagName].map((item) => <li dangerouslySetInnerHTML={{ __html: item }}></li>)}</ul>;
  }
}

export default Recipe;