import './Card.css'
function Card({card}){
    // if it is in {} then name should match paramter if it is withotu it then u can give any name
    return (
        <div class="cast-card">
            {console.log(card)}
            <div className='card-image'>
               <img src={`https://image.tmdb.org/t/p/original/${card.profile_path}`}/>
            </div>
            <div>{card.name}</div>
        </div>
    )
}

export default Card;