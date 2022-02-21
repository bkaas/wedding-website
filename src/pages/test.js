import React from "react"
import { graphql } from "gatsby"

import SaveTheDate from "../templates/SaveTheDate.js"

// Envelope addressees
const name = "Brendan Kaas \nand\n Jacqueline Fossenier";

const TestPage = () => <SaveTheDate name={name}/>;

export default TestPage;


// const query = graphql`
// MyQuery {
//   postgres {
//     allFamiliesList {
//       familyid
//       personByPersonid {
//         firstname
//         lastname
//       }
//       rank
//     }
//   }
// }`