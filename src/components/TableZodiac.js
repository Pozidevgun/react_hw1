import React from "react";
import data from "../data/data-zodiac.json"
import styled from "./Tablezodiac.module.css"

const TableZodiac = () =>{
  return(
    <table className={styled.table}>
      <caption className={styled.caption}>Zodiac Table</caption>
      <thead >
        <tr>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.result.map(item => <tr key={item.key}><td>{item.name}</td><td>{item.date}</td></tr>)}
      </tbody>
    </table>
  )
}
export default TableZodiac;