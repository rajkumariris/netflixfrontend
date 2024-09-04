function WatchListCard({item,removeMovieList}){

    function deleteFWatchList(){
        removeMovieList(item);
    }
    return (
        <div className="WatchListCard">
             <div className="WatchList-img">
                 <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt=""/>
            </div>  
            <div className="WatchList-title">
                {item.title}
            </div> 
            <div className="WatchList-vote">
                {item.vote_average}
            </div>
            <div className="watchList-card-delete" onClick={deleteFWatchList}>
                Delete</div>
           
        </div>
    )
}
export default WatchListCard;