
import genres from './../movieis'
import LengthCard from './LengthCard'
import MovieCard from './MovieCard'
import './moviecard.css'
const MovieList =()=>{
  return (
    <>
    {
      genres.map((items,index)=>{
        return(
          < div  className='movietext' >
          <h4>{items.name}</h4>
        <>{index%3==0 ? <LengthCard  genreId={items.id} />: <MovieCard  genreId={items.id} />}</>
          </div>
        )
      })
    }
    </>
  
  )
}




export default MovieList