import React, { useState } from 'react'
import axios from 'axios'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './Sparepartsform.scss'

function Sparepartsform() {

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [model, setModel] = useState('') // Модель
  const [years, setYears] = useState('') // Год выпуска
  const [volume, setVolume] = useState('') // Объем двигателя
  const [money, setMoney] = useState('') // Желаемая сумма выкупа
  const [inform, setInform] = useState('') // Дополнительная информация

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(name, tel)
    const form1 = axios.post('/api/form1', {
      name,
      tel,
      email,
      model,
      years,
      volume,
      money,
      inform
    })
    setName('')
    setTel('')
    setEmail('')
    setModel('')
    setYears('')
    setVolume('')
    setMoney('')
    setInform('')
  }

  return(
    <div className='Sparepartsform'>

      <form
        onSubmit={handleSubmit
        //   (e) => {
        //   e.preventDefault()
        //   console.log(name, tel, email, model,years, volume, money, inform)
        //   setEmail('')
        // }
      }
      >
        <legend>
          Введите имя
          <input
            type='text' 
            name='name' 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </legend>
        <legend>
          Введите номер телефона
          <PhoneInput
            // placeholder="Введите номер телефона"
            defaultCountry="RU"
            country="RU"
            value={tel}
            onChange={(value) => setTel(value)}
          />
        </legend>
        <legend>
          E-mail
          <input
            type='email' 
            name='email' 
            // placeholder="E-mail"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </legend>
        <legend>
          Модель
          <input
            type='text' 
            name='model' 
            // placeholder="Модель"
            value={model} 
            onChange={(e) => setModel(e.target.value)}
          />
        </legend>
        <legend>
          Год выпуска
          <input
            type='text' 
            name='years' 
            // placeholder="Год выпуска"
            value={years} 
            onChange={(e) => setYears(e.target.value)}
          />
        </legend>
        <legend>
          Объем двигателя
          <input
            type='text' 
            name='volume' 
            // placeholder="Объем двигателя"
            value={volume} 
            onChange={(e) => setVolume(e.target.value)}
          />
        </legend>
        <legend>
          Желаемая сумма выкупа
          <input
            type='text' 
            name='money' 
            // placeholder="Желаемая сумма выкупа"
            value={money} 
            onChange={(e) => setMoney(e.target.value)}
          />
        </legend>
        <legend>
          Дополнительная информация
          <textarea
            type='text' 
            name='inform' 
            // placeholder="Дополнительная информация"
            value={inform} 
            onChange={(e) => setInform(e.target.value)}
          />
        </legend>
        <button type='submit'>Заказать</button>
      </form>
    </div>
  )
}

export default Sparepartsform