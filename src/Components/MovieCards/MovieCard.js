import './MovieCard.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import MovieContext from '../../Context/MovieContext';
function MovieCard({movie}){
    // StoretoWatchList, watchlist,removemovie

    let { watchList,StoretoWatchList,removeMovieList} = useContext(MovieContext)
    console.log(StoretoWatchList,watchList,removeMovieList);
    function add(){
        StoretoWatchList(movie);
    }
    function remove(){
        removeMovieList(movie);
    }
    // we call this inside a function bcoz if we call it directly it immediate calls and code break
    // we want only to be that function called when we click 

    function doesContain(){
       for(let i =0;i<watchList.length;i++){
            if(watchList[i].id ===movie.id){
                return true;
            }
       }
        return false;
    }
   
    return (
        <div className="card">
            <div className="card-img">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
                <div className='card-title'>
                        {movie.title}
                 </div>
            </div>
            <div>
                <Link to={`/details/${movie.id}`}>click
                </Link>
            </div>
            
            <div className='overview'>
             {movie.overview}
            </div>  
            {
                doesContain() ?  <button onClick={remove}>Remove</button>: <button onClick={add}>Add</button> 
            }
          
          
        </div>
    )
}

export default MovieCard;