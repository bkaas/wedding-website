require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const connectionString = `postgres://\
${process.env.POSTGRES_USER}:\
${process.env.POSTGRES_PASSWORD}@\
${process.env.POSTGRES_HOST}/\
${process.env.POSTGRES_DB}\
`;

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },

  plugins: [
    "gatsby-plugin-styled-components",

    {
      resolve: "gatsby-source-pg",
      options: {
        connectionString: connectionString,
        schema: "public",
      }
    }
  ]
};