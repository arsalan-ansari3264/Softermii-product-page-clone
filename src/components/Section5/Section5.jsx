import React from "react";
import Expandable from "../Reusable/Expandable"

import listDatas, { heading } from "./listDatas";
const Section5 = () => {
  return (
    <>
     <Expandable  listDatas={listDatas} heading={heading}/>
    </>
  );
};

export default Section5;
