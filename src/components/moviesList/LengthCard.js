import React, { useEffect, useState } from 'react'
import Apis from '../Apis/Apis';



const baseImgUrl ="https://image.tmdb.org/t/p/original/"


function LengthCard({genreId,index}) {

    const [movie, setmovies]=useState([])
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        Apis.getMovieByGenreId(genreId).then(resp=>{
            console.log(resp.data.results)
            setmovies(resp.data.results)
        })
    }
  return (
    <div className='movielist1'> 
    {
        movie.map((item)=>{
            return(
                <div className='lengthcard'>
                <img src={baseImgUrl+item.backdrop_path} index/>
                <h4 className='tit'>{item.title}</h4>
                
                </div>
            )
        })
    }
    </div>
  )
}

export default LengthCard