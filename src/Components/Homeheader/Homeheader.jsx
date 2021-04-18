import React from 'react'
import './Homeheader.scss'
import Feedbackform from '../Feedbackform/Feedbackform'
import { FaWhatsapp } from 'react-icons/fa'


function Homeheader() {
  return(
    <div className='Homeheader'>
      <div className='Homeheader__wrapper'>
        <div className='Homeheader__title'>
          <h1>Автозапчасти для российских автомобилей</h1>
          <p>Широкий ассортимент запчастей на все марки российских авто</p>
          <p>Цены ниже, чем у конкурентов!</p>
        </div>
        <Feedbackform classes='Feedback__header'/>
        <div className='Homeheader__price'>
          <a href='whatsapp://tel:+79990957717'> <FaWhatsapp />Узнать стоимость в WhatsApp</a>
        </div>
      </div>
    </div>
  )
}

export default Homeheader