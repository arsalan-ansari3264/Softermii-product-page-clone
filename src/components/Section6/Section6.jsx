import React from "react";
import CardComp from "../Reusable/CardComp";
import datas, { bg, heading } from "./Datas";

const Section6 = () => {
  return (
    <>
      <CardComp lists={datas} heading={heading} bg={bg} />
    </>
  );
};

export default Section6;
