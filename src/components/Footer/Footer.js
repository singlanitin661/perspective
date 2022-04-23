import React from 'react'
import './Footer.css'
import pecLogo from '../../assets/pec-logo.png'

const Footer = () => {
  return (
    <div className='footer_root'>
      <div className='footer_top'>
        <div className='footer_college_info'>
          <img className='footer_logo_img' src={pecLogo} alt=""/>
          <p className='footer_college_info_content'>
            <b className='footer_college_title'>
              Punjab Engineering College<br/>
              (Deemed to be University)<br/>
            </b>
            Sector 12<br/>
            Chandigarh<br/>
            160012
          </p>
        </div>
      </div>
      <p className='footer_copyright'>Copyright © 2022. Punjab Engineering College, (Deemed to be University), Chandigarh. All rights reserved.</p>
    </div>
  )
}

export default Footer