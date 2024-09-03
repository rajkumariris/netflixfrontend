import { useContext } from "react"
import MovieContext from "../../Context/MovieContext"
import WatchListCard from "../WatchListCard/WatchListCard";
import './WatchList.css';
function WatchList(){

    let {watchList,StoretoWatchList,removeMovieList} = useContext(MovieContext);
    return (
        <div className="WatchListParent">
            {
                watchList.map(function(item){
                    return (<WatchListCard item={item}/>)
                })
            }
        </div>
    )
}
export default WatchList;