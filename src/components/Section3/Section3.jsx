import React from 'react'
import Expandable from '../Reusable/Expandable'
import listDatas, { heading } from '../Section3/listData'

const Section3 = () => {
  return (
    <>
      <Expandable listDatas={listDatas} heading={heading}/>
    </>
  )
}

export default Section3