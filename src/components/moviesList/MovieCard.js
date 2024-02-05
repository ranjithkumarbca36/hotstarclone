import React, { useEffect, useState } from 'react'
import Apis from '../Apis/Apis';

const baseImgUrl ="https://image.tmdb.org/t/p/original/"


function MovieCard({genreId,index}) {

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
    <div className='movielist'> 
    {
        movie.map((item,index)=>{
            return(
                <div key={index}>
                <img src={baseImgUrl+item.poster_path} />
                
                </div>
            )
        })
    }
    </div>
  )
}

export default MovieCard