import { useEffect, useState } from 'react';
import './Details.css'
import Cast from '../Cast';
import { useParams } from "react-router-dom";
import DetailsBanner from '../DetailsBanner/DetailsBanner';
function Details(){
let [data, setData] = useState([]);
const {id} = useParams();
    useEffect(function(){
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=435ce308db12f2b8fa6520a77e71bfe3&language=en-US&append_to_response=credits,videos`).then(function(response){
                return response.json();
        }).then(function(res){
            console.log( res)
            setData(res);
        })
    },[]);
    
    return (
        <div className='Details'>
            <h1 >Cast & CREW</h1>
            <DetailsBanner details= {data}/>
           {
            
            //here data.credits not data data already instialized with data but object inside it only
            //tell something there it or not
           
            data.credits ?  <Cast details={data.credits.cast.slice(0,8)} /> : null
           } 
        </div>
    )
}

export default Details;