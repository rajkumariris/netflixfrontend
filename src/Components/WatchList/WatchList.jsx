import {useState, useContext } from "react"
import MovieContext from "../../Context/MovieContext"
import WatchListCard from "../WatchListCard/WatchListCard";
import './WatchList.css';
function WatchList(){
    let {watchList,setWatchList,StoretoWatchList,removeMovieList} = useContext(MovieContext)
  let[search, setSearch] = useState("");

  function onchangeHandler(e){
    setSearch(e.target.value);
  }
  function handleAscSort(){
   let sortedAsc=  watchList.sort(function(MovieObj1, MovieObj2){
        return MovieObj1.vote_average - MovieObj2.vote_average;
     })
     console.log(sortedAsc)
     //react compare variables with reference if prev and current have same ref
     // it doesnt re render
     //here also same when we past  setWatchList(sortedAsc); like this it sets sortedAsc 
     // to setWatchList with same reference
     // but if we give ...sortedAsc spread operator created new array new ref and set it  
    setWatchList([...sortedAsc]);
  };
  function handleDescSort(){
    let sortedDsc=  watchList.sort(function(MovieObj1, MovieObj2){
         return MovieObj2.vote_average - MovieObj1.vote_average;
      })
      console.log(sortedDsc)
     setWatchList([...sortedDsc]);
     console.log(watchList)
   };
    return (
        <div className="WatchListParent">
            <button onClick={handleAscSort}>Asc Sort</button>
            <button onClick={handleDescSort}>Dsc Sort</button>
            <input  onChange={onchangeHandler} value={search}/>
            {
                watchList.filter(function(item){
                      return  item.title.toLowerCase().includes(search.toLowerCase())
                }).map(function(item){
                    return (<WatchListCard item={item} removeMovieList={removeMovieList}/>)
                })
            }
        </div>
    )
}
export default WatchList;