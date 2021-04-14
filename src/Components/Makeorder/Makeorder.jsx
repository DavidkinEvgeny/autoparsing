import React from 'react'
import { TiMessage } from 'react-icons/ti'
import { IoIosPhonePortrait } from 'react-icons/io'
import { GiBackwardTime } from 'react-icons/gi'
import { IoDocumentOutline } from 'react-icons/io5'
import { FaRegHandshake } from 'react-icons/fa'
import './Makeorder.scss'


function Makeorder() {
  return(
    <div className='Makeorder'>
      <h2>Как сделать заказ</h2>
      <div className='Makeorder__wrapper'>
        <div className='Makeorder__item'>
          <TiMessage />
          <p>Свяжитесь с нами, любым удобным для вас способом, либо оформите заявку на нашем сайте</p>
        </div>
        <div className='Makeorder__item'>
          <IoIosPhonePortrait />
          <p>Наши сотрудники ответят на Ваш звонок или запрос. Сообщат о наличии и цене запчасти</p>
        </div>
        <div className='Makeorder__item'>
          <GiBackwardTime />
          <p>После ознакомления с интересующими Вас деталями, наши менеджеры предоставят всю информацию об оплате</p>
        </div>
        <div className='Makeorder__item'>
          <IoDocumentOutline />
          <p>Вы оплачиваете стоимость запчастей удобным для Вас способом и мы подтверждаем оплату</p>
        </div>
        <div className='Makeorder__item'>
          <FaRegHandshake />
          <p>Мы согласовываем с Вами способ и условия отправки в Ваш город и отправляем в течении 2-3 дней</p>
        </div>
      </div>
    </div>
  )
}

export default Makeorder