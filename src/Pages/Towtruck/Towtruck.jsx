import React from 'react'
import Mainwrapper from './../../UI/Mainwrapper/Mainwrapper';
import './Towtruck.scss'


function Towtruck() {
  return(
    <Mainwrapper>
      <div className="Towtruck">
        <h1>Услуги эвакуатора</h1>
        <p>Проблемы на дороге? Нужно перевезти авто? Расскажите нам по телефону про автомобиль (марка, модель, сколько весит).</p>
        <p>Перевезем ваш авто в формате 24 часа и 7 дней в неделю.</p>
        <p><span>Звоните, уточняйте окончательную стоимость +7(999)095-77-17</span></p>
        <div className="Towtruck__image" />
      </div>
    </Mainwrapper>
  )
}

export default Towtruck