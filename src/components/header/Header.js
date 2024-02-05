import React, { useState } from 'react';
import './header.css'
import { BsFillHouseFill,BsSearch,BsFillPersonFill } from "react-icons/bs";
import { BiCameraMovie,BiMoviePlay,BiDotsVerticalRounded } from "react-icons/bi";
import { GiBilledCap } from "react-icons/gi";



const Header = ()=>{

const [toogle, setToogle]=useState(false)

    const icons = [{
        name:"Home",
        icon: BsFillHouseFill
    },
    {
        name:"TV",
        icon: BiCameraMovie

    },{
        name:"Search",
        icon: BsSearch

    },
    {
        name:"Movie",
        icon: BiMoviePlay

    },
    {
        name:"Sports",
        icon: GiBilledCap

    },
    {
        name:"MySpace",
        icon: BsFillPersonFill

    }]


    return(
        <div className='main'>
            <a href='#'>
            <img src='https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg' className='imgg'/></a>

            <div className='navbar'>
               {
                icons.map((items, index)=>{

                    return(
                        <div className='nav' key={index}>
                            <a href='#'>
                           <div className='navicons'> <items.icon/> </div>
                            <h4>{items.name}</h4>
                            </a>  
                        </div>
                        
                    )
                })
               }

            </div>

            {/*      */}


            <div className='navbar1'>
                
               {
                icons.map((items,index)=>{

                    return index<3 && (
                        <div className='nv1'>
                            
                            <a href='#'>
                           <div className='navicons1'> <items.icon/> </div>
                            <h4>{items.name}</h4>
                           
                            </a>  
                           
                            
                        </div>
                        
                        
                    )
                })
               }
              
                <div className='dots'  onClick={()=>setToogle(!toogle)}><BiDotsVerticalRounded/> </div>
              {toogle? <div className='navres'>
               {
                icons.map((items,index)=>{

                    return index>2 && (
                        <div className='nav11'>
                            
                            <a href='#'>
                           <div className='navicons11'> <items.icon/> </div>
                            <h4>{items.name}</h4>
                           
                            </a>  
                           
                            
                        </div>
                        
                        
                    )
                })
               }
                </div>:null}
                
                
               

            </div>

            <div className='avatar'>
                <img src='https://www.jiocinema.com/images/profile/profile_avatar.svg'/>
            </div>
        </div>
        
    )
}


export default Header;