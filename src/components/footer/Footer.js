import React from 'react'
import './footer.css'
import facebook from '../../image/social/FacebookOutlined.png'
import instagram from'../../image/social/InstagramOutlined.png'

const socialMedia = [
    {
    "nombre": "Facebook",
      "id": 1,
      "image":facebook,
      "link": "https://faceboook.com",
 
    },
    {
        "nombre": "Instagram",
          "id": 2,
          "image": instagram,
          "link": "https://instagram.com",
     
        }

]
const Footer = () => {
  return (
    <div className='footerContainer'>
        <p className="tittleFooter">ONDATICKETS</p>
        <p>Todos los derechos reservados OndaTickets By AK</p>
        <div className="iconContainer">
            {socialMedia.map(media=>{
                return(
                    <div>
                        <img src={media.image}/>
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