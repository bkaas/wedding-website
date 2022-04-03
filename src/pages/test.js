import React from "react"

import SaveTheDate from "../templates/SaveTheDate.js"
import GlobalStyle from "../components/GlobalStyles.js"

// Envelope addressees
const name = "Person1, Person3, Person4, Person & Person Lastname";

const TestPage = ({data}) => {

  return (
    <>
      <GlobalStyle />
      {/*<SaveTheDate pageContext={{name: names}} />*/}
      <SaveTheDate pageContext={{name: name}} />
    </>
  );
}

export default TestPage;