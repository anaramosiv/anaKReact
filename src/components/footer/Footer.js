import React from 'react'
import LogoBrand from '../Landing/logoBrand/LogoBrand'
import './footer.css'
import socialMedia from './socialMedia/socialMedia'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <LogoBrand/>      
        <p>Todos los derechos reservados OndaTickets By AK</p>
        <div className="iconContainer">
            {socialMedia.map(media=>{
                return(
                    <div key={media.id} className="mediaIcon">
                        <a href={media.link} target="_blank" rel="noreferrer">
                        <img src={media.image} alt="..."/>
                        
                        </a>

                    </div>
                )
            }           
            )}
        </div>
    </div>
  )
}
export default Footer