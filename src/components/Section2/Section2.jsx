import React from "react";

import CardComp from "../Reusable/CardComp";
import lists from "./list";
import { heading , bg } from "./list";

const Section2 = () => {
  return (
    <>
      <CardComp lists={lists}  heading={heading} bg={bg}/>
    </>
  );
};

export default Section2;
