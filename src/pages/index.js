import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Grid from "../components/grid";
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
      <Grid recipes={allRecipes} />
    </Layout>
  );
}

export default ElsMeusPlats;