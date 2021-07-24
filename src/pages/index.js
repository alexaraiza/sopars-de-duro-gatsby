import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Card from "../components/card";
import * as indexStyles from "./index.module.css";
import "../styles/index.css";

export const query = graphql`
  query {
    allRecipesJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            }
          }
          title
        }
      }
    }
  }
`;

const ElsMeusPlats = ({ data }) => {
  const allRecipes = data.allRecipesJson.edges;

  return (
    <Layout>
      <main className={indexStyles.grid}>
        {allRecipes.map((recipe) => <Card recipe={recipe.node} />)}
      </main>
    </Layout>
  )
}

export default ElsMeusPlats;