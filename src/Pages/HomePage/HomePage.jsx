import Banner from '../../Components/Banner/Banner';
import Movies from '../../Components/Movies';
function HomePage({ StoretoWatchList, watchList,removemovie}){
    return (
        <div>
          <Banner />
          <Movies 
            // watchList={watchList}
            // removemovie={removemovie}
            //   StoretoWatchList=  {StoretoWatchList}
          />
           
        </div>
    )
}

export default HomePage;