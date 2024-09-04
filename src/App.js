import logo from './logo.svg';
import './App.css';
import { useCallback, useState ,useRef, useEffect} from 'react';
import Movies from './Components/Movies';
import {BrowserRouter,  Route, Routes  } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import NotFound from './Pages/NotFound/NotFound';
import Callback from './Callbacks/Callback';
import MovieContext from './Context/MovieContext';
import WatchListPage from './Pages/WatchListPage/WatchListPage';
import NavBar from './Components/NavBar/NavBar';
function App() {

  let [watchList, setWatchList] = useState(() =>{
        const storedMovies = localStorage.getItem('movies');
        return storedMovies ? JSON.parse(storedMovies) : [];
  });


  // const [input, setInput] = useState('');
  // const [count, setCount] = useState(0);


  function StoretoWatchList(movieObj){
    let updatedobj = [...watchList, movieObj];
    setWatchList(updatedobj);
    console.log(watchList);
    localStorage.setItem('movies',JSON.stringify(updatedobj));
  }

  function removeMovieList(movieObj){
   let filterMovies =  watchList.filter((movie) => {
           return movieObj.id !==movie.id
        })

        setWatchList(filterMovies);
        console.log(watchList);
        localStorage.setItem('movies', JSON.stringify(filterMovies));
  }
 console.log(watchList+"  iam watchlist")

  return (
    <div className="App"> 
     <BrowserRouter>
      <MovieContext.Provider value={{watchList,setWatchList,StoretoWatchList,removeMovieList}}>
       <NavBar />
       
        <Routes>
        
          <Route
            path="/" 
            Component={HomePage}
            
          />
          
          <Route
            path="/details/:id"
            // exact={true}
            Component={DetailsPage}
          />

          <Route 
            path="/watchList"
            Component={WatchListPage}
          />

          <Route  path='*'
            element={NotFound}
          />
        

        
        </Routes>
       
        </MovieContext.Provider>
        </BrowserRouter>  
    </div>
  );
}

export default App;
//spa 
// every time when we re render the function reference is changing thatsy child component is called
// even when we are only changing the count 
// but we want increment function to change only when count changes or else dont change so
// we use use callback
//useRef doesnt allow to re render it uses 

 /* <input
          type='text'
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          
      />
 
      <input ref= {inputRef}/>

      <button onClick={incrementCount}>Increment Count</button>
      <h3>Input Text: {input}</h3>
      <h3>Count: {count} </h3>
      <h3>Count 2: {valueRef.current}</h3>
      <button onClick={onSubmit}>increment</button>

      <Callback count={count} incrementCount={incrementCount} />
      
      
      
      //  on function use usecallback to not to re render everytime only when on count variable changes
//   const incrementCount = useCallback(() => {
//     setCount(count+1);
//   },[count]);

//   const valueRef = useRef(0);
//   const inputRef = useRef(0);
//   const onSubmit = () =>{
//     console.log(valueRef.current);
//     valueRef.current= valueRef.current+1;
//     console.log(inputRef.current.value)
//    // setCount(count+1);
    
//   }

//   useEffect(function(){
//     console.log("iam useEffect on ref")
//   },[valueRef.current])
// console.log("rerender of ref");*/



  // StoretoWatchList = {StoretoWatchList}
            // removemovie =  {removeMovieList}
            // watchList={watchList}