import React from "react";

import CardComp from "../Reusable/CardComp";
import lists from "./data";
import { heading, bg } from "./data";
const Section4 = () => {
  return (
   <>
    <CardComp lists={lists} heading={heading} bg={bg}/>
   </>
  );
};

export default Section4;
