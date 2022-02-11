import React from "react"
import Envelope from "../components/Envelope.js"

// Envelope sizing
const envW = 20; // rem
const envH = envW * 11/15; // rem
const name = "Brendan Kaas \nand\n Jacqueline Fossenier";

const SaveTheDate = () => {

  return (
    <main>
      <title>Save The Date Page</title>
      <h1>Save The Date!</h1>
      <Envelope envW={envW} envH={envH} name={name} />
    </main>
  );

}

export default SaveTheDate