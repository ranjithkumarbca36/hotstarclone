
import axios from 'axios'

const movieBaseUrl ="https://api.themoviedb.org/3/";
const Api_key = "d431ea518da47b227ffff3ae43f5bb87";



const trending_movies = axios.get(movieBaseUrl+"movie/now_playing?api_key="+Api_key);
const popular_movies =axios.get(movieBaseUrl+"movie/popular?api_key="+Api_key);


const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=d431ea518da47b227ffff3ae43f5bb87';

    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    trending_movies, popular_movies, 
    getMovieByGenreId
}