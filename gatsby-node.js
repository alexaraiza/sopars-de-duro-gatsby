exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    {
      allRecipesJson {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  data.allRecipesJson.edges.forEach((edge) => {
    const recipe = edge.node;

    actions.createPage({
      path: `/${recipe.id}`,
      component: require.resolve("./src/templates/recipe.js"),
      context: { id: recipe.id },
    });
  });
};