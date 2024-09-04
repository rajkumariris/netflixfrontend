import { createContext } from "react";

const MovieContext = createContext({
    watchList:[],
    setWatchList:() =>{},
    StoretoWatchList:() =>{},
    removeMovieList :() =>{},
    
});
export default MovieContext;