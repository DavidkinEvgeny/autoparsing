import React from 'react'
import Advantages from '../../Components/Advantages/Advantages'
import Feedbackform from '../../Components/Feedbackform/Feedbackform'
import Homeheader from '../../Components/Homeheader/Homeheader'
import Makeorder from '../../Components/Makeorder/Makeorder'
import Mainwrapper from '../../UI/Mainwrapper/Mainwrapper'


function Home() {
  return(
    <Mainwrapper>
      <Homeheader />
      <Advantages />
      <Makeorder />
      <Feedbackform classes='Feedback__footer'/>
    </Mainwrapper>
  )
}

export default Home