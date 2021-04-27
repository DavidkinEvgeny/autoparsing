import React from 'react'
import './Footer.scss'
import { FaWhatsapp } from 'react-icons/fa'


function Footer() {
  return(
    <div className='Footer'>
      <div className='Footer__contact'>
        <h2>Свяжитесь с нами</h2>
        <div className='Footer__wrapper'>
          <div className='Footer__social'>
            <h4>Телефон:</h4>
            <p><a href='tel:+79990957717'>+7 (999) 095-77-17</a></p>
            <h4>Email:</h4>
            <p><a href='mailto:irus210992@mail.ru'>irus210992@mail.ru</a></p>
            <h4><FaWhatsapp /></h4>
            <p><a href='whatsapp://tel:+79990957717'>Пишите на WhatsApp</a></p>
          </div>
          <div className='Footer__schedule'>
            <h4>График работы (по телефону)</h4>
            <p>Ежедневно: с 10-00 по 22-00</p>
            <p>г. Москва, ул.6-я Радиальная д.21</p>
            <p>г. Москва, пр-д Студенческий д7</p>
            <p>г. Москва ул. Подольских курсантов 22 стр.5</p>
          </div>
        </div>
      </div>
      {/* <div className='Footer__image'>

      </div> */}
    </div>
  )
}

export default Footer