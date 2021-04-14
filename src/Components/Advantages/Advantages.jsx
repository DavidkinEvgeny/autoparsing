import React from 'react'
import { GiCargoCrane } from 'react-icons/gi'
import { GiWallet } from 'react-icons/gi'
import { ImTruck } from 'react-icons/im'
import { FaRegCalendarAlt } from 'react-icons/fa'
import './Advantages.scss'


function Advantages() {
  return(
    <div className='Advantages'>
      <h2>Наши преимущества</h2>
      <p>В первую очередь, это — <span>Прямые поставки запчастей без посредников!</span></p>
      <div className='Advantages__wrapper'>
        <div className='Advantages__item'>
          <GiCargoCrane />
          <h3>Быстрая отправка</h3>
          <p>Отправляем запчасти в течении 2-3 дней, с момента получения оплаты</p>
        </div>
        <div className='Advantages__item'>
          <GiWallet />
          <h3>Выгодная цена</h3>
          <p>Мы сотрудничаем со всеми крупными ТК, что позволяет Вам выбрать самые выгодные условия</p>
        </div>
        <div className='Advantages__item'>
          <ImTruck />
          <h3>Быстрая доставка</h3>
          <p>К каждой отправке, мы прилагаем накладную для отслеживания груза до вашего города</p>
        </div>
        <div className='Advantages__item'>
          <FaRegCalendarAlt />
          <h3>Соблюдение сроков</h3>
          <p>Среднее время доставки запчастей по России от 5 до 20 рабочих дней</p>
        </div>
      </div>
    </div>
  )
}

export default Advantages