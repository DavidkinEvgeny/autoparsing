import React from 'react'
import Mainwrapper from './../../UI/Mainwrapper/Mainwrapper';
import './Scraptruck.scss'


function Scraptruck() {
  return(
    <Mainwrapper>
      <div className='Scraptruck'>
        <h1>Услуги ломовоза</h1>
        <p>Главное преимущество использования ломовоза – отсутствие необходимости в привлечении бригады для загрузки лома. Благодаря наличию манипулятора и грейферного захвата он загрузит себя сам.</p>
        <p>Мы предоставим в ваше распоряжение ломовоз разной грузоподъемностью, позволяющий за один рейс вывести большую партию металлолома.</p>
        <p>Это позволит вам существенно сократить затраты на транспортировку.</p>
        <p><span>Хотите узнать подробности? Звоните +7(999)095-77-17</span></p>
        <div className="Scraptruck__image" />
      </div>
    </Mainwrapper>
  )
}

export default Scraptruck