import { useState,useEffect } from "react"
import MovieCard from "../MovieCards/MovieCard";
import "./Movies.css"
import Pagination from "../Pagination/Pagination";
function Movies({StoretoWatchList, watchList,removemovie}){
    let [movies, setMovies] = useState([]);
    let [pageNo, setPageNo] = useState(1);

    function increment(){
        setPageNo(pageNo+1);
    }
    function decrement(){
        setPageNo(pageNo-1);
    }
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=435ce308db12f2b8fa6520a77e71bfe3&page=${pageNo}`).then(function(response){
           return response.json();
        }).then((res)=>{
          
            setMovies(res.results);
        })
        
    },[pageNo])
    return (
        <>
            
            <h4 className="title-trending">Trending Movies</h4>
            <div className="card-parent">

            
                {
                    movies.map(function(movie){
                    return ( <MovieCard 
                   // watchlist={watchList}
                    //    StoretoWatchList= {StoretoWatchList}
                    //    removemovie={removemovie}
                         movie={movie} key={movie.id} 
                    />)
                    })
                }


            </div>
            <div>
                <Pagination increment={increment} decrement ={decrement} pageNo={pageNo}/>
            </div>
        </>
    )
}

export default Movies;

/// if in strict mode it comes twice
//data nned to check either returning function or data inside in map then it map is not function
//return should be there to print output on the screen in map