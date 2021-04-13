import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './Mainwrapper.scss'


function Mainwrapper(props) {
  return(
    <React.Fragment>
      <div className='Mainwrapper'>
        <Header />
        { props.children }
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Mainwrapper