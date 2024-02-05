import React, { useEffect, useState } from 'react'
import './banner.css';
import { BiArrowFromRight,BiArrowFromLeft } from "react-icons/bi";
import Apis from '../Apis/Apis';



const baseImgUrl ="https://image.tmdb.org/t/p/original/"
 const Banner = () => {
      const [movies , setmovies]= useState([]);
      useEffect (()=>{
            getTrendingMovies()
           
           
      },[]);



 const getTrendingMovies = ()=>{
     Apis.trending_movies.then(resp=>{
        //   console.log(resp.data.results)
          setmovies(resp.data.results)
        })
     };

 

  return (
    <div className='items'>
        <BiArrowFromLeft className='left'/>
        <BiArrowFromRight className='right'/>
        {
            movies.map((item,index)=>(
                <div className='' key={index}>
                 <img src={baseImgUrl+item.backdrop_path
                }className='imgg'/>
                <h4 className='title'>{item.title}</h4>
                </div>
               
                
            ))

        }
    </div>
  )
}



export default Banner
