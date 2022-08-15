import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <h2>No hemos encontrado lo que estás buscando :( </h2>
        <p>Intenta ir atrás o mira todos los eventos que tenemos disponibles</p>
        <Link to ="/events">Ver los eventos</Link>
    </div>
  )
}

export default ErrorPage