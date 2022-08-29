import React from 'react'
import './tittle.css'

const Tittle = ({titulo,subtitulo}) => {
  return (
    <>
        <section className='titulo'>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        </section>
    </>
  )
}

export default Tittle