import React from 'react'
import Sparepartsform from '../../Components/Sparepartsform/Sparepartsform'
import Mainwrapper from './../../UI/Mainwrapper/Mainwrapper';
import './Redemptionspareparts.scss'


function Redemptionspareparts() {
  return(
    <Mainwrapper>
      <div className='Redemptionspareparts'>
        <h2>Запчасти</h2>
        <p>Почему купить б/у запчасти для легковых автомобилей в Москве выгодно на "айрусавто"?</p>
        <p>Интернет-магазин "irusauto" предлагает купить б/у запчасти в Москве на отечественные автомобили на выгодных условиях.</p>
        <Sparepartsform />
        <div className='Redemptionspareparts__image' />
      </div>
    </Mainwrapper>
  )
}

export default Redemptionspareparts