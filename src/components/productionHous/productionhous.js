import React from 'react';
import './productionhouse.css'
import Logo from './../../assets/Images/disney.png';
import Pixar from './../../assets/Images/pixar.png';
import Marvel from './../../assets/Images/marvel.png';
import National from './../../assets/Images/nationalG.png';
import Starwar from './../../assets/Images/starwar.png';


import Disney from './../../assets/Videos/disney.mp4'
import marvel from './../../assets/Videos/marvel.mp4';
import national from './../../assets/Videos/national-geographic.mp4';
import pixar from './../../assets/Videos/pixar.mp4';
import starwars from './../../assets/Videos/star-wars.mp4';


function ProductionHouse() {

    const imgVid = [
        {
            image: Logo,
            vedio: Disney
        },
        {
            image: Pixar,
            vedio: pixar
        },
        {
            image: Marvel,
            vedio: marvel
        },
        {
            image:National,
            vedio: national
        },
        {
            image:Starwar,
            vedio: starwars
        },
    ]
  return (
   
    <div className='imgvido'>
        {
            imgVid.map((item)=>(
                <div className='totalimgvido'>
                {/* <video src={item.vedio}autoPlay loop playsInline/> */}

                <video src={item.vedio} autoPlay loop playsInline muted />

                    
                <img src={item.image } alt='wait'/>
                 
               
                </div>
            ))
        }
    </div>
  )
}

export default ProductionHouse