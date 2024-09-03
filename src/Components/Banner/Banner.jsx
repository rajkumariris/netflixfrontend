import './Banner.css'
import {useState, useEffect} from 'react';
function Banner(){
    const [courselMovie, setCourselMovie] = useState([]);
    const [film, setFilm] = useState([]);
    useEffect(function(){
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=435ce308db12f2b8fa6520a77e71bfe3').then(function(response){
                return response.json();
        }).then(function(res){
            console.log(res);
            setCourselMovie(res.results); // async call 
            let id = Math.floor(Math.random()*20);
            setFilm(res.results[id]); // async calls set 
            //setFilm(courselMovie[id])
            console.log(res.results[id]);
        })
    },[]);

    return (
        <div className='banner'>

            <div className='banner-img'>
               <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt=''/>
            </div>
            <div className='banner-title'>
                {film.title}
            </div>
          
        </div>
    )
}

export default Banner;