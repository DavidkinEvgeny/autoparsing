import React from 'react'
import Mainwrapper from './../../UI/Mainwrapper/Mainwrapper'
import './Sale.scss'


function Sale() {
  return(
    <Mainwrapper>
      <div className="Sale">
        <h1>Продажа отечественных авто</h1>
        <p>Ищите, где купить авто? Мы предлагаем российские автомобили по самым дешевым ценам. Знаете, где найти дешевле? Сообщите нам об этом. Нам тоже будет это интересно.</p>
        <p>Звоните, подберем для Вас автомобиль +7(999)095-77-17</p>
        <div className="Sale__image" />
      </div>
    </Mainwrapper>
  )
}

export default Sale