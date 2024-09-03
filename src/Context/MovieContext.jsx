import { createContext } from "react";

const MovieContext = createContext({
    watchList:[],
    StoretoWatchList:() =>{},
    removeMovieList :() =>{},
    
});
export default MovieContext;