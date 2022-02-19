import React from "react"
import styled from "styled-components"

const TestBlock = styled.div`
  background-color: blue;
  // border: 2px solid black;
`;

const SaveTheDateCard = ({className}) => {

  return(

    <TestBlock className={className}/>

  );

}

export default SaveTheDateCard;