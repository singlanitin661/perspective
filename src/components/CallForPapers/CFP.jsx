import React from 'react'
import Accordion from './Accordion/Accordion.js'
import {CFP_Data} from "./CFP_Data/CFP_data.js";
import "./CFP.css"

export default function CFP() {
  return (
    <>
    <div className='cfp_container'>
      <div className='about_title'>
          CALL FOR PAPERS
      </div>
      <div className="main_body">
      <div className="accordion">
        {CFP_Data.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      </div>
    </div>
    </>
  )
}
