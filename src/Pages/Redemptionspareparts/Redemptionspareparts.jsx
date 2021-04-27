import React from 'react'
// import Sparepartsform from '../../Components/Sparepartsform/Sparepartsform'
import Mainwrapper from './../../UI/Mainwrapper/Mainwrapper';
import './Redemptionspareparts.scss'


function Redemptionspareparts() {
  return(
    <Mainwrapper>
      <div className='Redemptionspareparts'>
        <h1>Запчасти</h1>
        <p>Почему купить б/у запчасти для легковых автомобилей в Москве выгодно на "irusauto"?</p>
        <p>Интернет-магазин "irusauto" предлагает купить б/у запчасти в Москве на отечественные автомобили по выгодным условиям.</p>
        <p><span>Хотите узнать подробности? Звоните +7(999)095-77-17</span></p>
        {/* <Sparepartsform /> */}
        <div className='Redemptionspareparts__image' />
      </div>
    </Mainwrapper>
  )
}

export default Redemptionspareparts