import React from 'react'
import Advantages from '../../Components/Advantages/Advantages'
import Homeheader from '../../Components/Homeheader/Homeheader'
import Makeorder from '../../Components/Makeorder/Makeorder'
import Mainwrapper from '../../UI/Mainwrapper/Mainwrapper'


function Home() {
  return(
    <Mainwrapper>
      <Homeheader />
      <Advantages />
      <Makeorder />
    </Mainwrapper>
  )
}

export default Home