import React from 'react'
import './ImportantDetails.css'

const impDates = [
  {
    description : "Paper Submission",
    date : "1 September 1939"
  },
  {
    description : "Notification",
    date : "1 September 1939"
  },
  {
    description : "Author registeration",
    date : "1 September 1939"
  },
  {
    description : "Deadline for final papers",
    date : "1 September 1939"
  }
]

const newsUpdates = [
  {
    text : "Something happened",
    link : "https://www.youtube.com/watch?v=kNs-bU4qlj8"
  }
]

const ImportantDetails = () => {
  return (
    <div className='imp_details_root'>
      <div className='imp_details_section'>
        <p className='imp_details_section_head'>IMPORTANT DATES</p>
        <b><u>Main Conference Track</u></b>
        <div className='imp_dates'>
          {
            impDates.map(({description,date},i) => {
              return (
                <span>
                  <b>{description+":"}</b> {date}
                </span>
              )
            })
          }
        </div>
        <a href="https://www.youtube.com/watch?v=_gEzmL1DXr8" className='imp_paper_submission'>Paper submission</a>
      </div>

      <div className='imp_details_section'>
        <p className='imp_details_section_head'>NEWS {"&"} UPDATES</p>
        <ul className='imp_news_list'>
          {
            newsUpdates.map(({text,link},i)=> {
              return (
                <li className='imp_news_item'>
                  <a href={link}>
                    {text}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default ImportantDetails