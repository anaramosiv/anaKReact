import React from 'react'
import './Landing.css'
import NavBar from '../components/Landing/NavBar/NavBar'

import Tittle from '../components/Landing/tittle/Tittle'

const Landing = () => {
  return (
    <div>
        <section className='landingPage'>
        {/* <NavBar/> */}
        <Tittle titulo="El mejor precio para tus boletos" subtitulo="Vive la música al máximo"/>
        </section> 

    </div>
  )
}

export default Landing