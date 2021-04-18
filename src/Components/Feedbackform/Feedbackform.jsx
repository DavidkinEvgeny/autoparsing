import React, {useState} from 'react'
import axios from 'axios'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './Feedbackform.scss'




function Feedbackform(props) {

  const classses = ['Feedback', props.classes]

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  let titles 
  if (props.classes === 'Feedback__header') {
    titles = <div className='Feedback__title'>
      <h3>Оставить заявку</h3>
      <p>Менеджер свяжется с вами после отправки формы и назовёт предварительную стоимость</p>
    </div>
  } else {
    titles = <div className='Feedback__title'>
      <h3>Оперативно расчитаем стоимость Вашей заявки</h3>
      <p>Заполните форму и наш менеджер вас проконсультирует</p>
    </div>
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(name, tel)
    const form = axios.post('/api/form', {
      name,
      tel
    })
    setName('')
    setTel('')
  }

  return(
    <form
      className={classses.join(' ')}
      onSubmit={
        handleSubmit
      //   (e) => {
      //   e.preventDefault()
      //   const form = axios.post('/api/form', {
      //     name,
      //     tel
      //   })
      //   console.log(name, tel)
      // }
    }
    >
      { titles }
      <input
        type='text' 
        name='name' 
        placeholder="Введите имя"
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