import React, {useState} from 'react'
// import axios from 'axios'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


function Feedbackform(props) {

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')

  return(
    <form
      className='Form'
      onSubmit={(e) => {
        e.preventDefault()
        console.log(name, tel)
      }}
    >
      <input
        type='text' 
        name='name' 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <PhoneInput
        placeholder="Введите номер телефона"
        defaultCountry="RU"
        country="RU"
        value={tel}
        onChange={(value) => setTel(value)}
      />
      <input
        type='submit'
        value='Отправить'
      />
    </form>
  )
}

export default Feedbackform