import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import FontStyles from "../fonts/FontStyles.js"

import Layout from "../components/Layout/Layout.js"

const NotFoundText = styled.h1`
  text-align: center;
  font-family: "Goudy Old Style", serif;
  font-weight: normal;

  @media (max-width: 640px) {
    font-size: calc(2em * 0.75);
  }

  @media (max-width: 320px) {
    font-size: calc(2em * 0.5);
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <FontStyles />
      <NotFoundText>
        Oopsies! <br/> Page not found.
        <br/>
        Go <Link to="/">home</Link>?
      </NotFoundText>
    </Layout>
  )
}

export default NotFoundPage
