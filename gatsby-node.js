const md5 = require('js-md5');
const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const { MyGoogleApi } = require("./src/util/myGoogleApi.js");

const RANGE = "'Card Invites'!A2:C3";

// Create pages for each save the date
exports.createPages = async ({graphql, actions, reporter}) => {
  const { createPage } = actions;

  // Get data from google sheets
  const gapi = new MyGoogleApi();
  await gapi.authorize();
  gapi.connect();
  const data = await gapi.readSheet(process.env.SHEET_ID, RANGE);

  // Create page for each address/set of names
  const stdTemplate = path.resolve(`src/templates/SaveTheDate.js`);
  data.values.forEach( val => {
    createPage({
      path: "/" + md5(val[1]),
      component: stdTemplate,
      context: {
        name: val[1],
      },
    });
  });

}

