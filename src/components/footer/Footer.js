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
                    <div key={media.id}>
                        {/* Linkear "A la manera de React" Por que esta dando un warning de que no se hace así */}
                        <a href={media.link} target="_blank">
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