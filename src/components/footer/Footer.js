import React from 'react'
import './footer.css'
import socialMedia from '../socialMedia/socialMedia.js'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <p className="tittleFooter">ONDATICKETS</p>
        <p>Todos los derechos reservados OndaTickets By AK</p>
        <div className="iconContainer">
            {socialMedia.map(media=>{
                return(
                    <div key={media.id}>
                        <img src={media.image} alt="..."/>
                        <p>{media.nombre}</p>

                    </div>
                )
            }           
            )}
        </div>
    </div>
  )
}
export default Footer