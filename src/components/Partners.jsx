import React from 'react'
import heflogo from './images/hef.jpg';
import kuccpslogo from './images/KUCCPS.jpg';
import HelbLogo from './images/HELB.png';
import ministry from './images/Ministry.jpg';
import huduma from './images/huduma.jpg';
export const Partners = () => {
  return (
    <div>
        <div className='partners-details'>
          <h3>Our partners</h3>
      </div>
      <div className="partners">
       
         <div>
         <a href="#">
         <img src={HelbLogo} alt="" id='helb' />
         </a>
          <a href="#">
          <img src={heflogo} alt="" id='hef' />
          </a>
          <a href="#">
          <img src={kuccpslogo} alt="" id='kuccps'/>
          </a>
          <a href="#">
          <img src={ministry} alt="" id='ministry'/>
          </a>
          <a href="#">
          <img src={huduma} alt="" id='huduma'/>
          </a>

         </div>
      </div>
    </div>
  )
}
