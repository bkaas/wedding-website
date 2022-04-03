import React from "react"
import { graphql } from "gatsby"

import SaveTheDate from "../templates/SaveTheDate.js"
import GlobalStyle from "../components/GlobalStyles.js"

// Envelope addressees
const name = "Person1, Person3, Person4, Person & Person Lastname";

const TestPage = ({data}) => {

  // Concatenate names into string with newlines and an "and" before the last one
  const names = data.postgres.allFamilies.nodes
    // .sort((a, b) => a.rank - b.rank)
    .reduce((tot, node, curInd, arr) => {

      if ((curInd === arr.length - 1) && (arr.length > 1)) {
        tot = tot + "and\n"
      }

      return (
        tot +
        node.personByPersonid.firstname +
        " " +
        node.personByPersonid.lastname +
        "\n"
      );

    }, "");

  return (
    <>
      <GlobalStyle />
      {/*<SaveTheDate pageContext={{name: names}} />*/}
      <SaveTheDate pageContext={{name: name}} />
    </>
  );
}

export default TestPage;


export const query = graphql`
query MyQuery {
  postgres {
    allFamilies(orderBy: [FAMILYID_ASC, RANK_ASC], condition: {familyid: 1}) {
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
}`