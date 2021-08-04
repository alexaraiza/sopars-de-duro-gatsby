import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import Grid from "../../components/grid";

export const query = graphql`
  query($id: String!) {
    allRecipesJson(filter: { categories: { eq: $id } }) {
      edges {
        node {
          id
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            }
          }
          title
          tags
        }
      }
    }
    categoriesJson(id: { eq: $id }) {
      name
    }
  }
`;

const Category = ({ data }) => {
  const allRecipes = data.allRecipesJson.edges;

  return (
    <Layout>
      <h1>{data.categoriesJson.name}</h1>
      <Grid recipes={allRecipes} />
    </Layout>
  );
}

export default Category;