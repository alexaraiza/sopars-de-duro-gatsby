module.exports = {
  siteMetadata: {
    title: "Sopars de duro",
    siteUrl: "https://alexaraiza.github.io/sopars-de-duro/"
  },
  pathPrefix: "/sopars-de-duro",
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "recipes",
        path: "./content"
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images"
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json"
  ],
};