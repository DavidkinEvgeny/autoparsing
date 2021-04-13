import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  return(
    <div className='Header'>
      <div className='Header__logo'>

      </div>
      <div className='Header__social'>
        <p><a href='tel:+79990957717'>+7 (999) 095-77-17</a></p>
        <p><a href='whatsapp://tel:+79990957717'>WhatsApp</a></p>
        <p><a href='mailto:irus210992@mail.ru'>почта</a></p>
      </div>
      <div className='Header__menu'>
        <menu>
          <ul>
            <li><NavLink to='/'>Главная</NavLink></li>
            <li><NavLink to='/redemptionauto'>Выкуп авто</NavLink></li>
            <li><NavLink to='/redemptionspareparts'>Запчасти</NavLink></li>
            <li><NavLink to='/scraptruck'>Услуги ломовоза</NavLink></li>
            <li><NavLink to='/towtruck'>Услуги эвакуатора</NavLink></li>
            <li><NavLink to='/scrap'>Выкуп лома</NavLink></li>
            <li><NavLink to='/sale'>Продажа авто</NavLink></li>
          </ul>
        </menu>
      </div>
    </div>
  )
}

export default Header