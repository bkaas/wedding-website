import React from "react"
import card from "../images/savethedate90.png"

const SaveTheDateCard = ({className}) => {
  return(
    <img src={card} alt="Save the date card!" className={className}/>
  );
}

export default SaveTheDateCard;