import React from 'react'
import './Landing.css'
import Tittle from 'components/screens/tittle/Tittle'

const Landing = () => {
  return (
    <div>
        <main className='landingPage'>
          <Tittle titulo="El mejor precio para tus boletos" subtitulo="Vive la música al máximo"/>
        </main> 
    </div>
  )
}

export default Landing