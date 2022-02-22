const md5 = require('js-md5');
const path = require("path");

// Create pages for each save the date
exports.createPages = async ({graphql, actions, reporter}) => {
  const { createPage } = actions;

  // Query Postgres data for familes
  const result = await graphql(
    `
      {
        postgres {
          allFamilies(orderBy: [FAMILYID_ASC, RANK_ASC]) {
            nodes {
              personByPersonid {
                firstname
                lastname
              }
              rank
              familyid
            }
          }
        }
      }
    `
  );


  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return
  }

  // Create an array of arrays of full name strings
  const names = [];
  let prevFamId = 0;
  let curName;
  for (let node of result.data.postgres.allFamilies.nodes) {

    // Join first/last names
    curName = node.personByPersonid.firstname +
      " " +
      node.personByPersonid.lastname +
      "\n";

    // Add names to array
    if (node.familyid !== prevFamId) {
      names.push([curName]);
    }
    else {
      names[names.length - 1].push(curName);
    }

    prevFamId = node.familyid;
  }

  // Join name subarrays and add an "and" before the last name
  // Generate hash from the first (highest rank) name ("first last")
  const address = names.map( (val) => {

    if (val.length > 1) {
      curName = val.slice(0, -1).join(' ') + "and\n" + val[val.length - 1].trim();
    }
    else {
      curName = val[0].trim();
    }

    return (
      {
        name: curName,
        url: md5(val[0].trim()),
      }
    );
  });

  // Create page for each address/set of names
  const stdTemplate = path.resolve(`src/templates/SaveTheDate.js`);
  address.forEach( val => {
    createPage({
      path: "/" + val.url,
      component: stdTemplate,
      context: {
        name: val.name,
      },
    });
  });

}

