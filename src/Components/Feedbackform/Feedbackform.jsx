import React, {useState} from 'react'
// import axios from 'axios'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './Feedbackform.scss'


function Feedbackform(props) {

  const classses = ['Feedback', props.classes]

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  let titles 
  if (props.classes === 'Feedback__header') {
     titles = <React.Fragment>
      <h3>Оставить заявку</h3>
      <p>Менеджер свяжется с вами после отправки формы и назовёт предварительную стоимость</p>
    </React.Fragment>
  } else {
    titles = <React.Fragment>
      <h3>Оперативно расчитаем стоимость Вашей заявки</h3>
      <p>Заполните форму и наш менеджер вас проконсультирует</p>
    </React.Fragment>
  }

  return(
    <form
      className={classses.join(' ')}
      onSubmit={(e) => {
        e.preventDefault()
        console.log(name, tel)
      }}
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