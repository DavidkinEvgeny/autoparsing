import React from 'react'
import './Footer.scss'


function Footer() {
  return(
    <div className='Footer'>
      <h2>Свяжитесь с нами</h2>
      <div className='Footer__wrapper'>
      <div className='Footer__social'>
        <h4>Телефон:</h4>
        <p><a href='tel:+79990957717'>+7 (999) 095-77-17</a></p>
        <h4>Email:</h4>
        <p><a href='mailto:irus210992@mail.ru'>почта</a></p>
        <h4>WhatsApp:</h4>
        <p><a href='whatsapp://tel:+79990957717'>Пишите на WhatsApp</a></p>
      </div>
      <div className='Footer__schedule'>
        <h4>График работы (по телефону)</h4>
        <p>Пн-Сб: с 10-00 по 22-00</p>
      </div>
      <div className='Footer__image'>
        
      </div>
      </div>
    </div>
  )
}

export default Footer